import { useOrder } from "@/context/order-context";
import { userInfoFields } from "@/data";

export default function YourInfo() {
  const { order, setFieldValue } = useOrder();

  return (
    <form className="grid gap-4">
      {userInfoFields.map((field) => (
        <div key={field.id} className="grid gap-1">
          <div className="flex justify-between items-center">
            <label htmlFor={field.id} className="text-xs text-app-marine-blue">
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
            onChange={(event) => setFieldValue(field.id, event.target.value)}
            value={order.userInfo[field.id]}
            required={field.required}
          />
        </div>
      ))}
    </form>
  );
}
