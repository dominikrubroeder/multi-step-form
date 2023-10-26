import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { UserInfo } from "@/components/step-content/YourInfo";
import { AddOn } from "@/components/step-content/PickAddOns";
import {
  BillingPeriod,
  BillingPlan,
} from "@/components/step-content/SelectYourPlan";
import IconArcade from "@/components/svg/IconArcade";
import IconAdvanced from "@/components/svg/IconAdvanced";
import IconPro from "@/components/svg/IconPro";

export const billingPlans: BillingPlan[] = [
  {
    title: "Arcade",
    icon: <IconArcade />,
    monthlyPayment: 9,
    yearlyPayment: 90,
    yearlyHint: "2 month free",
  },
  {
    title: "Advanced",
    icon: <IconAdvanced />,
    monthlyPayment: 12,
    yearlyPayment: 120,
    yearlyHint: "2 month free",
  },
  {
    title: "Pro",
    icon: <IconPro />,
    monthlyPayment: 15,
    yearlyPayment: 150,
    yearlyHint: "2 month free",
  },
];

// Define the shape of your order
interface Order {
  step: number;
  userInfo: UserInfo;
  billingPeriod: BillingPeriod;
  billingPlan: BillingPlan;
  addOns: AddOn[];
}

// Define the actions for manipulating the order state
type OrderAction =
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_USER_INFO"; payload: UserInfo }
  | { type: "SET_BILLING_PERIOD"; payload: BillingPeriod }
  | { type: "SET_BILLING_PLAN"; payload: BillingPlan }
  | { type: "TOGGLE_ADDON"; payload: AddOn }
  | { type: "ADD_ADDON"; payload: AddOn }
  | { type: "REMOVE_USER_INFO"; payload: string }
  | { type: "TOGGLE_BILLING_PERIOD"; payload: null }
  | { type: "REMOVE_ADDON"; payload: string };

// Define the initial state of the order
const initialState: Order = {
  step: 1,
  userInfo: { name: "", email: "", phoneNumber: "" },
  billingPeriod: "Monthly",
  billingPlan: billingPlans[0],
  addOns: [],
};

// Create the context for the order
interface OrderContextProps {
  order: Order;
  dispatch: Dispatch<OrderAction>;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

// Define the reducer function to handle order actions
const orderReducer = (state: Order, action: OrderAction): Order => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    case "SET_BILLING_PERIOD":
      return { ...state, billingPeriod: action.payload };
    case "SET_BILLING_PLAN":
      return { ...state, billingPlan: action.payload };
    case "ADD_ADDON":
      return { ...state, addOns: [...state.addOns, action.payload] };
    case "TOGGLE_ADDON":
      const isSelected = state.addOns.find(
        (addOn) => addOn.title === action.payload.title,
      );

      return {
        ...state,
        addOns: !isSelected
          ? [...state.addOns, action.payload]
          : state.addOns.filter(
              (addOn) => addOn.title !== action.payload.title,
            ),
      };
    case "REMOVE_USER_INFO":
      return { ...state, userInfo: { ...state.userInfo } };
    case "TOGGLE_BILLING_PERIOD":
      return {
        ...state,
        billingPeriod: state.billingPeriod === "Monthly" ? "Yearly" : "Monthly",
      };
    case "REMOVE_ADDON":
      return {
        ...state,
        addOns: state.addOns.filter((addOn) => addOn.title !== action.payload),
      };
    default:
      return state;
  }
};

// Define the OrderProvider component to wrap your application with the order context
interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => console.log(order), [order]);

  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

// Define a custom hook to access the order context
export const useOrder = (): OrderContextProps => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
