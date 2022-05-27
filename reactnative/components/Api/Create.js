import { useState } from "react-native";
import react from "react";

const url = "http://206.189.49.197/User/";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentAbsenceStatus, setCurrentAbsenceStatus] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      currentAbsenceStatus,
    };
//TJEK AXIOS MODULE (EVT RE INSTALL)
    axios
      .post(url, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

return ( 
  <View className="create"> 
  <Text> Create new user </Text>
  <FormData onSubmit={handleSubmit}> </FormData>
  <Label> FirstName</Label>
  <Input
  type="text"
  required
  value={firstName}
  onChangeText={(firstName) => setFirstName(firstName)}
  />
  <Label> LastName </Label> 
  <Input
  required
  value={lastName}
  onChangeText={(lastName) => setLastName(lastName)}
  />
  <Label> AbssenceStatus</Label>
  <Input
  value={currentAbsenceStatus}
  onChangeText={(currentAbsenceStatus) => setCurrentAbsenceStatus(currentAbsenceStatus)}
  />
 {!isPending && <Button> Add User</Button> }
 {isPending && <Button disabled> Adding User...</Button> }
  </View>
)}
export default Create;