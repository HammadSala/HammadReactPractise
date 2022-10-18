import React, { Component} from "react";
type Props ={}
type State = {
    Login : Boolean,
    Reply : Boolean
}

class Survey extends Component<Props, State>{

    constructor(props: State) {
        super(props);

        this.state = {
            Login : false,
            Reply : false
        }
    }

    updateNotifcation = () =>{
        this.setState( {
            Login : true
        })
    }

    componentDidMount() {
        console.log("Mountd")
        setTimeout(this.updateNotifcation, 1000);
    }


    thankyou = () => {
        this.setState({
            Reply : false
        })
    }
    updateMessage = () => {
        this.setState( {
            Login : false,
            Reply : true
        })
        setTimeout(this.thankyou, 2000)
    }

    replyNo =()  =>{
        this.setState ({
            Login : false
        })
    }

    render() {
        return (
            <>
            
                
                    {this.state.Login && (
                        <div>We are in form area
                        <h2>Do you wish to take the survey</h2>
                        <button onClick={this.updateMessage}> Yes</button>
                        <button onClick={this.replyNo}>No</button>
                        </div>
                    )}

                    {this.state.Reply && (
                        <p>Testing message</p>
                    )}
                    {(!this.state.Login && !this.state.Reply ) && (
                        <p>Thank You have a good Day! </p>
                    )}

            </>
        )
      
    }

}

export default Survey;

