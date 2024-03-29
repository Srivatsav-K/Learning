import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const Unauthorised = () => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Unauthorised</AlertTitle>
      <AlertDescription>Please login to continue</AlertDescription>
    </Alert>
  );
};
export default Unauthorised;
