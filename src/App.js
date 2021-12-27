
import './App.css';
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import AuthorizationForm from "./components/AuthorizationForm";

function App() {

  return (
   <>
       <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
       <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
       <AuthorizationForm/>
   </>
  );
}

export default App;
