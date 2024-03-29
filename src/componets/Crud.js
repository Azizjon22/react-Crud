import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Crud extends Component {
  
    constructor (props) {
        super (props);
        this.state = {
            cars: [],
            selectedIndex: -1
        }
    }

    render() {
      const addCard = (e) => {
          e.preventDefault();
    
          let carName = e.target.carName.value;
          let carPrice= e.target.carPrice.value;
          let carDate = e.target.carDate.value;
          let carColor = e.target.carColor.value;
          let carPhoto = e.target.carLink.value;
          // console.log(carName,carPrice,carDate,carColor,carPhoto);
    
    
          let newCar ={
            name: carName,
            price: carPrice,
            date:carDate,
            color: carColor,
            photo: carPhoto,
          };
    
    
          if (this.state.selectedIndex>=0){
            this.state.cars[this.state.selectedIndex] = newCar;
            this.state.selectedIndex = -1;
            Edit();
        } else {
            this.state.cars.push(newCar);
            Add();
        }
    
          
          e.target.reset();
    
          this.setState({
            cars: this.state.cars
          });
    
      };
    
      const deleteCar = (index) => {
        this.state.cars.splice(index,1);
    
        this.setState({
          cars: this.state.cars
        })
      };
    
      const Add = () => {
        toast("siz udaladingiz")
      }
    
      const Edit = () => {
        toast.dark("Muffaqiyatli o'zgartirildi")
    };
    
      const editCard = (index) => {
        this.setState({
            selectedIndex: index
        })
    };

    
    return (
      <>

         <ToastContainer theme="dark"/>
      <div className="container">

        <div class="row">

            <div className="col-4 mt-3">

            <div className="card">

                <div className="card-header">
                    <h3 className="text-center">AutoMobile list</h3>
                 </div>

                 <form onSubmit={addCard}> 
                 <div className="card-body">
                    <input type="text"
                    className="form-control"
                    placeholder="car name"
                    name="carName"
                    defaultValue={this.state.cars[this.state.selectedIndex]?.name}
                    /> 

                    {/* 2 */}

                    <input type="number"
                    className="form-control mt-3"
                    placeholder="car price"
                    name="carPrice"
                    defaultValue={this.state.cars[this.state.selectedIndex]?.price}
                    /> 


                 {/* 3 */}

                 <input type="date"
                className="form-control mt-3"
                name="carDate"
                defaultValue={this.state.cars[this.state.selectedIndex]?.date}
                    /> 


                    {/* 4 */}

                    <input type="color"
                    className="form-control mt-3"
                    name="carColor"
                    defaultValue={this.state.cars[this.state.selectedIndex]?.color}
                    /> 


                  {/* 5 */}


                  <input type='text'
                    className="form-control mt-3"
                    placeholder="car photo link"
                    name="carLink"
                    defaultValue={this.state.cars[this.state.selectedIndex]?.photo}
                    /> 

                    <button type="submit" className="btn btn-success mt-3 d-block ml-auto"> add </button>
                 </div>
                 </form>

            </div>




            </div>
            

            <div className="col-8">

            <div className="row">
              {this.state.cars.map((item,index) => {
                return(
                  <div className="col-6 mt-3">

                    <div className="card">

                      <div className="card-header">
                        <h3 className="text-center">{this.state.cars[index].name}</h3>
                      </div>

                      <div className="card-body">

                        <div className="list-group">

                          <li className="list-group-item list-group-item-success ">
                            <b>price:  </b><span>{this.state.cars[index].price}$</span>
                          </li>

                          <li className="list-group-item list-group-item-success ">
                            <b>Date:  </b><span>{this.state.cars[index].date}</span>
                          </li>

                          <li className="list-group-item list-group-item-success d-flex justify-content-between">
                            <b>color:  </b><button className="btn" style={{background: `${this.state.cars[index].color}`}}></button>
                          </li>
                          

                        </div>

                        <img className="w-100 mt-3" src={this.state.cars[index].photo} alt='car'/>

                      </div>

                      <div className="card-footer d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => editCard(index)}>Edit </button>
                        <button className="btn btn-danger" onClick={() => deleteCar(index)}>Delete </button>
                      </div>

                    </div>

                  </div>
                )
              })}
            </div>

            </div>

        </div>

      </div>
        
      </>
    )
  }
}


