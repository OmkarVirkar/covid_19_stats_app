import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {CountryInput} from "./components/CountryInput";
import {CountryTiles} from "./components/CountryTiles";
import Grid from '@material-ui/core/Grid';
import {countryCovidList} from "./countryList";
import "./components/main.css";
const _ = require('lodash');




export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      countryList : _.cloneDeep(countryCovidList)
    }
  }
  filterData = (letters) => {
    let countryitems = [];
    if(letters.trim() == ''){
      countryitems = _.cloneDeep(countryCovidList);
    }else{
      let countries = _.filter(countryCovidList, (ccl) => {
        if(ccl.Country.toLowerCase().includes(letters.toLowerCase())){
          return ccl;
        }
      })
      countryitems = countries;
    }
    this.setState({countryList: countryitems});
  } 

  render(){
    
    
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12} >
            <br/>
            <Header title="Covid 19 status"/>
          </Grid>
          <Grid item xs={12}>
            <br/>
            <CountryInput searchCountry={this.filterData} />
          </Grid>
          
          <Grid item container spacing={2} style={{marginTop:"20px"}}>
              <Grid item xs={0} sm={1}>
  
              </Grid>
              <Grid item container xs={12} sm={10} spacing={2}>
                <CountryTiles countryItems={this.state.countryList} />
              </Grid>
              <Grid item xs={0} sm={1}>
  
              </Grid>
          </Grid>
        </Grid>
        
      </div>
    );
  }
  
}
