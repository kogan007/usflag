import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import UIDrawer from './Drawer'; 
import {Link} from 'gatsby';

export default function Nav() {
    const data = useStaticQuery(graphql`
    query {
        bigcommerceData {
          site {
            categoryTree {
              name
              path
              entityId
              children {
                name
                path
                entityId
                children {
                  name
                  path
                  entityId
                }
              }
            }
          }
        }
      }
      
      
      
    `)
    
    const {bigcommerceData: {site: {categoryTree}}} = data;
    const categories = [
        {
            name: "Flag Accessories"
        },
        {
            name: "Flag Display Cases"
        },
        {
            name: "Flags Poles"
        },
        {
            name: "Military Flags"
        }
    ]

    return (
        <div className="row">
		<div className="logosnd-row">
			<div className="custom-container">
				<div className="snd-flex-row">
					
					<div className="snd-right-search-section">
						<div className="menu-link-call">
							<nav className="sidenav">
								<ul className="sidenav-menu">
                                
                                    {
                                        categoryTree.map((category) => 
                                           {
                                               return category.entityId === 66 ? 
                                                (
                                                    <li key={category.entityId}>
                                                        <UIDrawer categories={category.children}>Top Categories</UIDrawer>
                                                    </li>
                                                )
                                                :
                                                <li className="dropdown" key={category.entityId}>
                                                <Link to={category.path}> {category.name}</Link>
                                             
                                             {category.children.length ? (
                                                 <div className="dropdown-menu">
                                                     <ul>
                                                     {category.children.map((child) => (
                                                         <li key={child.name}>
                                                             <Link to={child.path}>{child.name}</Link>
                                                         </li>
                                                     ))}
                                                     </ul>
                                                 </div>
                                             ) : ''
                                         
                                         }
                                                
                                             </li>
                                           }
                                        
                                        )
                                    }

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

