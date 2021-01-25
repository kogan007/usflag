import React from 'react';
import Layout from "../components/Layout"


export default function Subscribe({location}){
    console.log(location)
    if (location.state) {
        const {status} = location.state;
        return (
            <Layout>
                {status==200 ? (
                    <div>
                        Successfully Subscribed
                    </div>
                ):
                (
                    <div>
                        Error
                    </div>
                )
            }
            </Layout>
        )
    }
    return (
        <Layout>
            Looking for something else?
        </Layout>
    )

    

}