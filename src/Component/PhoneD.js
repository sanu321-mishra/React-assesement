import React from "react";
import axios from "axios" 
class AxiosFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            result: [],
            userData: []
        }
    }
    componentDidMount() {
       axios.get("http://localhost:3002/userdetails").
       then((res)=>this.setState({result:res.data})).catch((err)=>console.log("error"))
    }
    handleUname = (e) => {
        this.setState({ username: e.target.value })
    }
    findUser = (e) => {
        e.preventDefault()
        const a = this.state.result.filter((item) => item.fname === this.state.username)
        this.setState({ userData: a })
    }
    render() {
        console.log(this.state.userData)
        return (
            <div>
                <form >
                    <div className="form-group"><label> <strong>Username:</strong><input placeholder="ex saurabh" type="text" onChange={(e) => this.handleUname(e)}></input></label>
                        <button onClick={(e) => this.findUser(e)}>search</button>
                    </div>
                    {
                        this.state.userData.map((item) => (
                            <div>
                                {item.fname}<br></br>
                                {item.mobile}<br></br>
                                {item.email}

                            </div>
                        ))
                    }

                </form>

            </div>
        )
    }
}
export default AxiosFetch