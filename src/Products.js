import React,{ useState}from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import GridView from "./components/GridView";
import { useFilterContext } from "./context/FilterContext";


const Products = () => { 
  const {mobileFilter,filter_products} = useFilterContext();
  
  return(
  <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>
      <section className={mobileFilter ? "product-view-sort hidden" : "product-view-sort"}>
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-product">
          <GridView products={filter_products}/>
        </div>
      </section>
    </div>


  </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  .hidden{
    display:none;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;