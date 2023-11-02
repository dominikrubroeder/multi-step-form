import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { billingPlans, steps } from "@/data";
import {
  AddOn,
  BillingPeriod,
  BillingPlan,
  UserFormField,
  UserInfo,
} from "@/types";

// Define the shape of your order
interface Order {
  step: number;
  userInfo: UserInfo;
  formErrors: { name: boolean; email: boolean; phoneNumber: boolean };
  billingPeriod: BillingPeriod;
  billingPlan: BillingPlan;
  addOns: AddOn[];
  total: number;
}

// Define the actions for manipulating the order state
type OrderAction =
  | { type: "SET_STEP"; payload: number }
  | {
      type: "SET_USER_INFO";
      payload: { property: UserFormField; value: string };
    }
  | { type: "REMOVE_USER_INFO"; payload: string }
  | { type: "SET_FORM_ERROR"; payload: UserFormField }
  | { type: "REMOVE_FORM_ERROR"; payload: UserFormField }
  | { type: "SET_BILLING_PLAN"; payload: BillingPlan }
  | { type: "SET_BILLING_PERIOD"; payload: BillingPeriod }
  | { type: "ADD_ADDON"; payload: AddOn }
  | { type: "REMOVE_ADDON"; payload: string }
  | { type: "TOGGLE_ADDON"; payload: AddOn }
  | { type: "TOGGLE_BILLING_PERIOD"; payload: null }
  | { type: "SET_STATE"; payload: Order }
  | { type: "RESET_STATE" };

// Define the initial state of the order
const initialState: Order = {
  step: 1,
  userInfo: { name: "", email: "", phoneNumber: "" },
  formErrors: { name: false, email: false, phoneNumber: false },
  billingPeriod: "Monthly",
  billingPlan: billingPlans[0],
  addOns: [],
  total: 0,
};

// Create the context for the order
interface OrderContextProps {
  order: Order;
  dispatch: Dispatch<OrderAction>;
  nextStep: () => void;
  previousStep: () => void;
  evaluateNextStep: (startFrom?: number) => void;
  setFieldValue: (fieldId: UserFormField, inputValue: string) => void;
  getBillingPlanPrice: (billingPlan: BillingPlan) => string;
  addOnIsSelected: (addOn: AddOn) => boolean;
  getAddOnPrice: (addOn: AddOn) => string;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

// Define the reducer function to handle order actions
const orderReducer = (state: Order, action: OrderAction): Order => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.payload.property]: action.payload.value,
        },
      };
    case "REMOVE_USER_INFO":
      return { ...state, userInfo: { ...state.userInfo } };
    case "SET_FORM_ERROR":
      return {
        ...state,
        formErrors: { ...state.formErrors, [action.payload]: true },
      };
    case "REMOVE_FORM_ERROR":
      return {
        ...state,
        formErrors: { ...state.formErrors, [action.payload]: false },
      };
    case "SET_BILLING_PLAN":
      return { ...state, billingPlan: action.payload };
    case "SET_BILLING_PERIOD":
      return { ...state, billingPeriod: action.payload };
    case "TOGGLE_BILLING_PERIOD":
      return {
        ...state,
        billingPeriod: state.billingPeriod === "Monthly" ? "Yearly" : "Monthly",
      };
    case "ADD_ADDON":
      return { ...state, addOns: [...state.addOns, action.payload] };
    case "REMOVE_ADDON":
      return {
        ...state,
        addOns: state.addOns.filter((addOn) => addOn.title !== action.payload),
      };
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
    case "SET_STATE":
      return action.payload;
    case "RESET_STATE":
      return initialState;
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

  useEffect(() => {
    order.total = 0;

    if (order.billingPeriod === "Monthly") {
      order.total += order.billingPlan.monthlyPayment;
      order.addOns.map((addOn) => (order.total += addOn.monthlyPrice));
    }

    if (order.billingPeriod === "Yearly") {
      order.total += order.billingPlan.yearlyPayment;
      order.addOns.map((addOn) => (order.total += addOn.yearlyPrice));
    }
  }, [order]);

  const nextStep = (startFrom?: number) =>
    dispatch({
      type: "SET_STEP",
      payload: startFrom ? startFrom : order.step + 1,
    });

  const previousStep = (startFrom?: number) =>
    dispatch({
      type: "SET_STEP",
      payload: startFrom ? startFrom : order.step - 1,
    });

  const evaluateNextStep = (startFrom?: number) => {
    if (order.step >= steps.length) {
      dispatch({ type: "RESET_STATE" });
    } else if (order.step === 1) {
      let errors: string[] = [];

      for (const [key, value] of Object.entries(order.userInfo)) {
        if (value.trim() === "") errors.push(key);
      }

      if (errors.length === 0) nextStep(startFrom);

      errors.forEach((error) =>
        dispatch({
          type: "SET_FORM_ERROR",
          payload: error as UserFormField,
        }),
      );
    } else {
      nextStep(startFrom);
    }
  };

  const setFieldValue = (fieldId: UserFormField, inputValue: string) => {
    dispatch({ type: "REMOVE_FORM_ERROR", payload: fieldId });
    dispatch({
      type: "SET_USER_INFO",
      payload: { property: fieldId, value: inputValue },
    });
  };

  const getBillingPlanPrice = (billingPlan: BillingPlan) => {
    return order.billingPeriod === "Monthly"
      ? `${billingPlan.monthlyPayment}/mo`
      : `${billingPlan.yearlyPayment}/yr`;
  };

  const addOnIsSelected = (addOn: AddOn) =>
    !!order.addOns.find(
      (selectedAddOns) => selectedAddOns.title === addOn.title,
    );

  const getAddOnPrice = (addOn: AddOn) => {
    return order.billingPeriod === "Monthly"
      ? `${addOn.monthlyPrice}/mo`
      : `${addOn.yearlyPrice}/yr`;
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        dispatch,
        nextStep,
        previousStep,
        evaluateNextStep,
        setFieldValue,
        getBillingPlanPrice,
        addOnIsSelected,
        getAddOnPrice,
      }}
    >
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
