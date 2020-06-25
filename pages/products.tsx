import React, { Component } from 'react';
//import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import { Separator, Container, Header, Content, SwipeRow, View, Text, Icon, Button, ListItem } from 'native-base'
import { Http } from '../api/http';

export class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            storeData: [],
            storeProducts: []
        }
    }


    private http = new Http();

    componentDidMount(){
        console.log("Component mount");
        this.getProducts();
    }

    async getProducts() {
         const response = await this.http.get('store/1');

         this.setState({
             storeData: response.data[0],
             storeProducts: response.data[0].products
         });
         console.log("Response from server", response);
         console.log("Response from server", response.data[0].products[0]);
    }

    render (){
        // @ts-ignore
        return (
            <Container>
                <Content>
                    <Separator bordered>
                        <Text>{this.state.storeData.name}</Text>
                    </Separator>
                    {
                        this.state.storeProducts.map( (k,v) =>{
                          return(
                              <ListItem key={k.id}>
                                  <Text key={k.id + v}>{ k.name }</Text>
                              </ListItem>
                          )
                        })
                    }

                </Content>
            </Container>
        );
    }

}

export default Products;