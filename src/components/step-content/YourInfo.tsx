import { useOrder, UserFormField } from "@/context/order-context";

export interface UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

interface Field {
  id: UserFormField;
  title: string;
  type: "text" | "email" | "number";
  placeholder: string;
  required: boolean;
}

const fields: Field[] = [
  {
    id: "name",
    title: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
    required: true,
  },
  {
    id: "email",
    title: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    required: true,
  },
  {
    id: "phoneNumber",
    title: "Phone Number",
    type: "number",
    placeholder: "e.g. Stephen King",
    required: true,
  },
];

export default function YourInfo() {
  const { order, dispatch } = useOrder();

  return (
    <form className="grid gap-4">
      {fields.map((field) => (
        <div key={field.id} className="grid gap-1">
          <div className="flex justify-between items-center">
            <label htmlFor={field.id} className="text-xs text-blue-900">
              {field.title}
            </label>
            {order.formErrors[field.id] && (
              <span className="text-xs text-red-400">
                This field is required
              </span>
            )}
          </div>
          <input
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            className={`px-3 py-1.5 rounded-md border transition ${
              order.formErrors[field.id] ? "border-red-400" : ""
            }`}
            onChange={(event) => {
              dispatch({ type: "REMOVE_FORM_ERROR", payload: field.id });
              dispatch({
                type: "SET_USER_INFO",
                payload: { property: field.id, value: event.target.value },
              });
            }}
            value={order.userInfo[field.id]}
            required={field.required}
          />
        </div>
      ))}
    </form>
  );
}
