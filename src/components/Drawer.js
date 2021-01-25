import React from 'react'; 
import { Drawer, IconButton }  
    from '@material-ui/core'; 

import ReorderIcon from '@material-ui/icons/Reorder'; 
import {Link} from 'gatsby';
  
export default class UIDrawer  
    extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      isDrawerOpened: false, 
    }; 
  } 
  toggleDrawerStatus = () => { 
    this.setState({ 
      isDrawerOpened: true, 
    }) 
  } 
  closeDrawer = () => { 
    this.setState({ 
      isDrawerOpened: false, 
    }) 
  } 

  
  render() { 
    const { isDrawerOpened } = this.state; 
    return ( 
      <>
         
            <div className={`toggle${isDrawerOpened ? ' active' : ''}`} onClick={this.toggleDrawerStatus} ><a>
              <IconButton>
                  <div className="drawerChild">
                {this.props.children} 
                    <ReorderIcon/>
                    </div>
                </IconButton>
               
              </a>
            </div>
         
        <Drawer 
          variant="temporary"
          open={isDrawerOpened} 
          onClose={this.closeDrawer} 
          
        > 
        <div id="navbg" className="sidenav">
            <div className="sidenav-menu">
          {
              this.props.categories.map((category) => (
                  <li key={category.name}>
                      <Link to={category.path}>
                      {category.name}
                      </Link>
                  </li>
              ))
          }
          </div>
          </div>
        </Drawer> 
      </>
    ); 
  } 
};
