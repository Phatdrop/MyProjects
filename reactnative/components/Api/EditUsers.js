import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditUsers = () => {
  const [editfirstName, seteditFirstName] = useState("");
  const [editlastName, seteditLastName] = useState("");
  const [editcurrentAbsenceStatus, seteditCurrentAbsenceStatus] = useState();

  const handleEdit = async (baseID) => {
    const updatedUser = {
      baseID,
      firstName: editfirstName,
      lastName: editlastName,
      currentAbsenceStatus: editcurrentAbsenceStatus,
    };
    try {
      const response = await axios.put(`/User${baseID}`, updatedUser);
      setUser(
        user.map((user) =>
          user.baseID === baseID ? { ...response.data } : user
        )
      );
      seteditFirstName("");
      seteditLastName("");
      seteditCurrentAbsenceStatus("");
      history.push("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //    let fd = new FormData(formRef.current)
  //    let userData ={};
  //    fd.forEach(function(value,key){
  //        userData[key] = value;
  //    })
  //    axios.patch(`User/${this.props.id}`, userData)

  //     useEffect(() => {
  //         fetchUsers()
  //         return () => {};
  //     }, [])

  //     const fetchUsers = () => {
  //         axios.put("http://206.189.49.197/User/{baseID}", {
  //             firstName: firstName,
  //             lastName: lastName,
  //             currentAbsenceStatus: currentAbsenceStatus
  //              })
  //         .then(res => {
  //             console.log(res)
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
  //     }

  //     updateUser = async (baseID, value) => {
  //         let data = await axios.patch(`User/${baseID}`, {firstName: value})
  //         this.fetchUsers()
  //     }

  return (
    <View>
      <Text>EditUsers</Text>
    </View>
  );
};

export default EditUsers;
