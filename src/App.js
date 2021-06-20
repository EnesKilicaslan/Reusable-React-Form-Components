import "./App.css";
import FormikContainer from "./components/FormikContainer";
import CourseEnrollmentForm from "./pages/CourseEnrollmentForm";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* {<RegistrationForm />} */}

      <CourseEnrollmentForm />
    </div>
  );
}

export default App;
