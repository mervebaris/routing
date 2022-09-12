
import { string, object} from "yup"; 

const required_message = "This field is required";

const contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string().email().required(required_message),
  message: string().min(5).required(required_message),
});

export default contactSchema;