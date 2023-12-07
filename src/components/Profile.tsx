import React, {useState} from "react";

interface ProfileProps {
    firstName: string;
    lastName: string;
    age: number;
    onUpdateProfile: (newProfileProps: {firstName: string, lastName: string, age: number}) => void;

}

const Profile: React.FC<ProfileProps>= ({ firstName, lastName, age, onUpdateProfile }) => {
    const [editing, setEditing] = useState(false);
    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);
    const [newAge, setNewAge] = useState(age);

    const handleUpdate = () => {
        onUpdateProfile({
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        });

    };

    return(
        <>
            <h1>My Profile</h1>
            <p>My name is Ivan. I'm study as a software developer.</p>

            <div>
                <h2>Profile</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Age: {age}</p>

                {editing ? (
                    <div>
                        <label>New First Name:</label>
                        <input
                            type="text"
                            value={newFirstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                        />
                        <br />
                        <label>New Last Name:</label>
                        <input
                            type="text"
                            value={newLastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                        />
                        <br />
                        <label>New Age:</label>
                        <input
                            type="number"
                            value={newAge}
                            onChange={(e) => setNewAge(Number(e.target.value))}
                        />
                        <br />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                ) : (
                    <button onClick={() => setEditing(true)}>Edit Profile</button>

                )}
            </div>
        </>
    );
}

export default Profile;