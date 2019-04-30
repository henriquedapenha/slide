import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  };


/*    Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === deleteValue) {         
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };*/

//const x =document.getElementsByClassName('cnt-letra')[0].innerHTML.replace(new RegExp("</p><p>", 'g'), "<br>").replace(new RegExp("<p>", 'g'), "").replace(new RegExp("</p>", 'g'), "").trim().split('<br>');
/*
 <Button variant="contained" color="primary" onClick={() => this.control(-100)}>
                prev
                </Button>

                <Button variant="contained" color="primary" onClick={() => this.control(100)}>
                next
                </Button>
*/
class Slides extends Component{
  
    state ={
        form:{
            letraMusica:''
        },
        letra:'',
        open:false,
        slide:0
    };

    loadSlide = () => {
        const setLetraMusica = document.getElementsByClassName('letraMusica')[0].innerHTML.replace(/<p[^>]+\?>/i, '')
        .replace(/<\/p>/i, '')
        .replace(/<[//]{0,1}(P|p)[^><]*>/g, "")
        .replace(/<\/div>/i, '<br>')
        .replace(/<[//]{0,1}(DIV|div)[^><]*>/g, "<br>")
        .trim();//.split('<br>').clean("");
        
        this.setState({letra: setLetraMusica,open:true});
    
    }

    control = (valor)=>{
        const value = valor + this.state.slide;
        this.setState({slide:value});
        //React.Children.toArray(this.props.children).findDOMNode(Slides).getElementsByClassName('slideshow')[0].style.marginTop = value;
    }

    handleOpen = ()=>{
        this.setState({open:true})
    }
    handleClose = ()=>{
        this.setState({open:false})
    }

    onKeyPressed = (e)=>{
        if(e.keyCode === 37 && this.state.slide < 0){
            //voltar página
            this.control(97);
        } else if(e.keyCode === 39){
            //rolar pagina
            this.control(-97);
        }else if(e.keyCode === 38){
            //zerar e ir para o inicio
            this.control(-this.state.slide);

            //esc case
        }else if(e.keyCode === 27){
            this.handleClose();
        }
    }

    render(){
        return(
            
            <div>
               <h1>
                   Carregar Slides
                </h1> 
                <div contentEditable="true" className="letraMusica">
                    
                </div>
                <Button variant="contained" color="primary" onClick={this.loadSlide}>
                Modo Slide
                </Button>

                <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose} 
                className="slideshow"
                onKeyDown={this.onKeyPressed}
                tabIndex="0"
                >
                <div dangerouslySetInnerHTML={{__html: `${this.state.letra}`}} 
                style={{marginTop:this.state.slide +'vh'}}  />

               
                </Dialog>
            </div>
        );
    }
}
Slides.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Slides);