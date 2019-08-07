import React from 'react';
import './App.css';
import './components/dataTable/DataTable.css';
import Table from './components/dataTable/Table';
import TableHead from './components/dataTable/TableHead';
import TableRow from './components/dataTable/TableRow';
import TableCell from './components/dataTable/TableCell';
import TableBody from './components/dataTable/TableBody';
import { Input, Container, Form, Row, Col, Label , FormGroup, Button } from 'reactstrap';

// const mobiles = ""

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        phoneId : 0,
        phone : '',
        phoneCpu : '',
        phoneRam : '',
        phoneCamera : '',
        phoneBattery : '',
        phoneImg : "",
        newInfo : [],
        formButton : "success",
        formButtonTittle : "Add New",
        modify : false,
      };
      
      this.handlePhone        = this.handlePhone.bind(this);
      this.handlePhoneCpu     = this.handlePhoneCpu.bind(this);
      this.handlePhoneRam     = this.handlePhoneRam.bind(this);
      this.handlePhoneCamera  = this.handlePhoneCamera.bind(this);
      this.handlePhoneBattery = this.handlePhoneBattery.bind(this);
      this.handleSubmit       = this.handleSubmit.bind(this);
      this.handleOfEdit       = this.handleOfEdit.bind(this);
      this.handlePhoneImg     = this.handlePhoneImg.bind(this);
      this.handleOfRemove     = this.handleOfRemove.bind(this);
  }

  handlePhone(e){
    this.setState({
      phone : e.target.value
    })
  }

  handlePhoneImg(e){
    this.setState({
      phoneImg : e.target.value
    })
  }
  
  handlePhoneCpu(e){
    this.setState({
      phoneCpu : e.target.value
    })
  }

  handlePhoneRam(e){
    this.setState({
      phoneRam : e.target.value
    })
  }

  handlePhoneCamera(e){
    this.setState({
      phoneCamera : e.target.value
    })
  }

  handlePhoneBattery(e){
    this.setState({
      phoneBattery : e.target.value
    })
  }
  
  handleSubmit(e){
    e.preventDefault();
    const {phone,phoneCpu,phoneRam,phoneCamera,phoneBattery,phoneImg,phoneId} = this.state;
    if(! this.state.modify){
      this.setState({
        newInfo : [...this.state.newInfo,{phoneId,phone,phoneCpu,phoneRam,phoneCamera,phoneBattery,phoneImg}],
        phoneId : phoneId + 1,
        phone : '',
        phoneCpu : '',
        phoneRam : '',
        phoneCamera : '',
        phoneBattery : '',
        phoneImg : ""
      });
    }else{
      const {newInfo} = this.state;
      const {phoneId} = this.state;
      const findinlist = newInfo.find(obj => {return obj.phoneId === phoneId} );
      findinlist.phone = this.state.phone;
      findinlist.phoneCpu = this.state.phoneCpu;
      findinlist.phoneRam = this.state.phoneRam;
      findinlist.phoneCamera = this.state.phoneCamera;
      findinlist.phoneBattery = this.state.phoneBattery;
      findinlist.phoneImg = this.state.phoneImg;
      this.setState({
        phone : '',
        phoneCpu : '',
        phoneRam : '',
        phoneCamera : '',
        phoneBattery : '',
        phoneImg : "",
        formButton : "success",
        formButtonTittle : "Add New",
        modify : false
      });
    }
  }

  handleOfEdit(e){
    const {newInfo} = this.state;
    const {id} = e.target;
    const idInt = parseInt(id, 10)
    const findinlist = newInfo.find(obj => {return obj.phoneId === idInt} );
    this.setState({
      phoneId : findinlist.phoneId,
      phone : findinlist.phone,
      phoneCpu : findinlist.phoneCpu,
      phoneRam : findinlist.phoneRam,
      phoneCamera : findinlist.phoneCamera,
      phoneBattery : findinlist.phoneBattery,
      phoneImg : findinlist.phoneImg,
      formButton : "primary",
      formButtonTittle : "Edit Row",
      modify : true
    })
  }

  handleOfRemove(e){
    if(!this.state.modify){
      const {newInfo} = this.state;
      const {id} = e.target;
      const idInt = parseInt(id, 10)
      const newList = newInfo.filter( obj => {return obj.phoneId !== idInt} );
      this.setState({
        newInfo : newList
      })
    }else{
      alert('این ردیف در حال ویرایش است')
    }
  }

  render(){
    const {newInfo} = this.state;
    return(
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col sm="12" md={6}>
            <Form>
              <Row form>
                <Col sm="12">
                  <FormGroup>
                    <Label for="mobileName">Mobile Name</Label>
                    <Input type="tex"
                    id="mobileName"
                    value={this.state.phone}
                    onChange={this.handlePhone} 
                    placeholder="mobile name"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="mobileImg">image URL</Label>
                    <Input type="tex"
                    id="mobileImg"
                    value={this.state.phoneImg}
                    onChange={this.handlePhoneImg} 
                    placeholder="mobile name"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                <FormGroup>
                  <Label for="cpuValue">CPU</Label>
                  <Input type="tex"
                    id="cpuValue" 
                    value={this.state.phoneCpu}
                    onChange={this.handlePhoneCpu}
                    placeholder="CPU"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="ramValue">RAM</Label>
                    <Input type="select" 
                    name="select" 
                    value={this.state.phoneRam}
                    onChange={this.handlePhoneRam}
                    id="ramValue">
                        <option value="">Ram</option>
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cameraValue">Camera</Label>
                    <Input type="tex" 
                    id="cameraValue"
                    value={this.state.phoneCamera}
                    onChange={this.handlePhoneCamera} 
                    placeholder="Camera"/>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="batteryValue">Battery</label>
                    <Input type="tex" 
                    id="batteryValue" 
                    value={this.state.phoneBattery}
                    onChange={this.handlePhoneBattery}
                    placeholder="battery"/>
                  </FormGroup>
                </Col>
              </Row>
              <Button 
                  color={this.state.formButton} 
                  onClick={this.handleSubmit}
                  block>{this.state.formButtonTittle}</Button>
            </Form>
          </Col>
          <Col sm="12" md={6} className="Center-items">
            <div className="Image-Container">
             <i className="fas fa-image Img-icon"></i>
             <img className="Image-display" src={this.state.phoneImg} alt="" />
            </div>
          </Col>
        </Row>
        
          <div className="Container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell type="th">thumbnail</TableCell>
                  <TableCell type="th">Mobile Name</TableCell>
                  <TableCell type="th">CPU</TableCell>
                  <TableCell type="th">RAM</TableCell>
                  <TableCell type="th">Camera</TableCell>
                  <TableCell type="th">Battery</TableCell>
                  <TableCell type="th">Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newInfo.map((item,id) => (
                  <TableRow key={id}>
                    <TableCell type="td">
                      <img src={item.phoneImg} style={{width: '50px',height: '50px'}}  alt=""/>
                    </TableCell>
                    <TableCell type="td">{item.phone}</TableCell>
                    <TableCell type="td">{item.phoneCpu}</TableCell>
                    <TableCell type="td">{item.phoneRam}</TableCell>
                    <TableCell type="td">{item.phoneCamera}</TableCell>
                    <TableCell type="td">{item.phoneBattery}</TableCell>
                    <TableCell type="td">
                      <i className="far fa-edit mr-2 Table-i-edit"
                      onClick={this.handleOfEdit} id={item.phoneId}></i>
                      <i className="far fa-trash-alt Table-i-remove" id={item.phoneId} 
                      onClick={this.handleOfRemove}></i>
                    </TableCell>
                  </TableRow>
                )
                )}
              </TableBody>
            </Table>
          </div> 
      </Container>
      
    );
  }
  
}

export default App;
