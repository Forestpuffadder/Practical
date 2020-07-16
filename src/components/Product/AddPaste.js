import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchCategoriesAction} from '../../_actions/category.actions'
import {fetchProductsAction,filterProductsByID} from '../../_actions/paste.actions'

class Products extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCategories()
        this.props.fetchProducts()
    }

    handleChange(e){
        debugger;
        console.log("123",e.target.value);
        // let filteritme = this.props.products.filter(product => product.categoryId === e.target.value);
        // let filteritem = this.props.products.filter(item =>item.categoryId === e.target.value);
     }

    render(){
        return(
            <Container fluid="md">
                <br/>
               <Row className="justify-content-md-center">
                    <select className="form-control" style={{width:"50%"}}
                     value={this.props.selectedValue} onChange={(e)=>this.props.filterProductsByID(this.props.products,e.target.value)} >
                    <option value="">--select--</option>
                    {this.props.categories.map(({id,name},index)=>
                       <option key={id} value={id} >{name}</option>)}
                    </select>
                </Row>
                <br/>
                
                <Row md={3}>
                {this.props.products.map((p,index)=>(
                    <div key={index}>
                    <Col>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Name : {p.name}</Card.Title>
                            <Card.Title>Model : {p.model}</Card.Title>
                            <Card.Title>Price : {p.price}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <br/>
                    </div>
                     ))}
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        selectedValue:state.selectedValue,
        categories:state.categories,
        products:state.products
    }
}

const mapStateToDispatch = (dispatch)=>{
    return{
            fetchCategories:()=>{dispatch(fetchCategoriesAction())},
            fetchProducts:()=>{dispatch(fetchProductsAction())}
    }
}


export default connect(mapStateToProps,mapStateToDispatch) (Products);