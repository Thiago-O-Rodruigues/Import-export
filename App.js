import React, {Component} from 'react';
import Botao from "./Botao.js"
import Texto from "./Texto.js"



class App extends Component
{

constructor(props){
super(props);
this.state = {labelText: '',}
}

setLabelText = (labelText) => {
this.setState({labelText});
}

 render()
{
	return (
<div>

<Texto text={this.state.labelText}/>
<Botao handleClick={this.setLabelText} label =" botão 1"/>
<Botao handleClick={this.setLabelText} label =" botão 2"/>
<Botao handleClick={this.setLabelText} label =" botão 3"/>
</div>)
}
}

export default App
