import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './OrderForm.css'
import {FormProvider, useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import {PizzaContext} from "../../context/PizzaContext.jsx";


const schema = z.object({
    firstname: z.string(),
    phone: z.string().refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value), {message: "Invalid phone number"}),
    address: z.string().min(5),
    priority: z.boolean()
})

const OrderForm = () => {

    const {username} = useContext(AuthContext);
    const {pizzaContext} = useContext(PizzaContext);

    const totalPrice = pizzaContext.reduce(
        (sum, pizza) => sum + Number(pizza.price) * Number(pizza.quantity),
        0
    );

    const form = useForm({
        mode: "onBlur",
        defaultValues: {
            firstname: username,
            phone: "+XXXXXXXXXX",
            address: "my adress",
            priority: false,
        },
        resolver: zodResolver(schema),
    })

    const onSubmit = (data) => {
        console.log("handleSubmit", data);
        form.reset();
    }


    return (
        <div className="container">
            <h1>Ready to order? Let's go!</h1>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Input name="firstname" control={form.control} type="text" id="firstName" readOnly/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <Input name="phone" control={form.control} type="tel" id="phone" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <div className="input-wrapper">
                            <Input name="address" control={form.control} type="text" id="address" required/>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <div className="checkbox-wrapper">
                            <Input name="priority" control={form.control} type="checkbox" id="priority"/>
                            <label htmlFor="priority">Want to give your order priority?</label>
                        </div>
                    </div>

                    <Button type="submit" className="order-btn" disabled={!form.formState.isValid}>
                        Order now for €{totalPrice}
                    </Button>
                </form>
            </FormProvider>
            {form.formState.errors.firstname && <div className="alert alert-danger">{form.formState.errors.firstname.message}</div>}
            {form.formState.errors.phone && <div className="alert alert-danger">{form.formState.errors.phone.message}</div>}
            {form.formState.errors.address && <div className="alert alert-danger">{form.formState.errors.address.message}</div>}
            {form.formState.errors.priority && <div className="alert alert-danger">{form.formState.errors.priority.message}</div>}
        </div>
    )
}

export default OrderForm