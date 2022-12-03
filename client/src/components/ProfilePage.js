import {useState} from "react"

function ProfilePage(props) {
    const [email, setEmail] = useState("xx@gmail.com")//useState(props.email)
    const [emailEditClicked, setEmailEditClicked] = useState(false)

    const [address, setAddress] = useState("address xyz") //useState(props.address)
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
        <p>Profile Page</p>
          <h1>Username: </h1>
          <h1>First name: </h1>
          <h1>Last name: </h1>

          <div>
              <h1>Email: </h1>
              {!emailEditClicked
              ? <hl>{email}</hl>
              : emailEditingForm
              }
              <button onClick={onEmailEditClicked}>Edit</button>
          </div>

          <div>
              <h1>Address: </h1>
              {!addressEditClicked
                  ? <hl>{address}</hl>
                  : addressEditingForm
              }
              <button onClick={onAddressEditClicked}>Edit</button>
          </div>

          <h1>Opt into bit statements: </h1>
      </div>
    );
}
  
export default ProfilePage;
  