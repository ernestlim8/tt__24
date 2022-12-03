import {useState} from "react"

function ProfilePage(props) {
    const [email, setEmail] = useState(props.email)
    const [emailEditClicked, setEmailEditClicked] = useState(false)

    const [address, setAddress] = useState(props.address)
    const [addressEditClicked, setAddressEditClicked] = useState(false)

    const emailEditingForm =
        <form>
            <label htmlFor="editEmail"> EditedEmail: </label>
            <input
                id="editEmail"
                name="editEmail"
                type="editEmail"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </form>

    const addressEditingForm =
        <form>
            <label htmlFor="addressEmail"> EditedEmail: </label>
            <input
                id="addressEmail"
                name="addressEmail"
                type="addressEmail"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
        </form>

    const onEmailEditClicked = (e) => {
        e.preventDefault()
        setEmailEditClicked(!emailEditClicked)
    }

    const onAddressEditClicked = (e) => {
        e.preventDefault()
        setAddressEditClicked(!addressEditClicked)
    }

    return (
      <div className="App">
        <h1>Profile Page</h1>
          <h2>Username: {props.Username} </h2>
          <h2>First name: {props.Firstname} </h2>
          <h2>Last name: {props.Lastname} </h2>

          <div>
              <h2>Email: {props.Email} </h2>
              {!emailEditClicked
              ? <hl>{email}</hl>
              : emailEditingForm
              }
              <button onClick={onEmailEditClicked}>Edit</button>
          </div>

          <div>
              <h2>Address: {props.Address} </h2>
              {!addressEditClicked
                  ? <hl>{address}</hl>
                  : addressEditingForm
              }
              <button onClick={onAddressEditClicked}>Edit</button>
          </div>

          <h2>Opt into bit statements: {props.OptIntoPhyStatements} </h2>
      </div>
    );
}
  
export default ProfilePage;
  