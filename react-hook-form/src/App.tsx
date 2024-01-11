import { Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./Navbar";

import NativeForm from "./components/NativeForm";
import ManagingFormState from "./components/ManagingFormState";
import Validation1 from "./components/Validation1";
import InitialValues from "./components/InitialValues";
import FetchInitialValues from "./components/FetchInitialValues";
import NestedObjects from "./components/NestedObjecs";
import Arrays from "./components/Arrays";
import Practise from "./components/Practise";
import DynamicFields from "./components/DynamicFields";
import NumericAndDateValues from "./components/NumericAndDateValues";
import WatchFields from "./components/WatchFields";
import GetAndSetFieldValues from "./components/GetFieldValues";
import TouchedAndDirty from "./components/TouchedAndDirty";
import DisablingFields from "./components/DisablingFields";
import HandleSubmissionError from "./components/HandleSubmissionError";
import DisableFormSubmission from "./components/DisableFormSubmission";
import FormSubmissionStates from "./components/FormSubmissionStates";
import ResetForm from "./components/ResetForm";
import MuiLoginForm from "./components/MuiLoginForm";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/native-form" element={<NativeForm />} />
        <Route path="/manage-form-state" element={<ManagingFormState />} />
        <Route path="/validation-1" element={<Validation1 />} />
        <Route path="/initial-values" element={<InitialValues />} />
        <Route path="/fetch-initial-values" element={<FetchInitialValues />} />
        <Route path="/nested-objects" element={<NestedObjects />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/dynamic-fields" element={<DynamicFields />} />
        <Route path="/practise" element={<Practise />} />
        <Route path="/numeric-and-date" element={<NumericAndDateValues />} />
        <Route path="/watch-fields" element={<WatchFields />} />
        <Route
          path="/get-and-set-field-values"
          element={<GetAndSetFieldValues />}
        />
        <Route path="/touched-and-dirty" element={<TouchedAndDirty />} />
        <Route path="/disabling-fields" element={<DisablingFields />} />
        <Route
          path="/handle-submission-error"
          element={<HandleSubmissionError />}
        />
        <Route
          path="/disable-form-submission"
          element={<DisableFormSubmission />}
        />
        <Route
          path="/form-submission-states"
          element={<FormSubmissionStates />}
        />
        <Route path="/reset-form" element={<ResetForm />} />
        <Route path="/mui" element={<MuiLoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
