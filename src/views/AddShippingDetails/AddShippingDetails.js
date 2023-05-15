import React from 'react';
import './shipping.css'
export default function AddShippingDetails() {
    return (
        <>
            <div class="container">
                <div class="form__name">Shipping and Billing Form</div>
                <div class="form__container">
                    <section class="form__personal">
                        <div class="sections">
                            <div class="box">1</div><span>Personal Information</span>
                        </div>
                        <div class="personal--form">
                            <form class="form--name" action="">
                                <div class="first">
                                    <label for="firstname">First Name</label>
                                    <input placeholder="e.g. Richard" id="firstname" type="text" />
                                </div>
                                <div class="last">
                                    <label for="firstname">Last Name</label>
                                    <input placeholder="e.g. Bovell" id="firstname" type="text" />
                                </div>
                                <div class="email">
                                    <label for="firstname">Email</label>
                                    <input placeholder="e.g. rb@apple.com" id="firstname" type="email" />
                                </div>
                            </form>
                        </div>
                    </section>
                    <section class="form__billing">
                        <div class="sections">
                            <div class="box billing">2</div><span>Billing Address</span>
                        </div>
                        <div class="shipping--form">
                            <form class="form--shipping" action="">
                                <div class="row one">
                                    <div class="address">
                                        <label for="address-one">Address Line 1</label>
                                        <input placeholder="e.g. 1 Infinite Loop" id="address-one" type="text" />
                                    </div>
                                    <div class="address-two">
                                        <label for="address-two">Address Line 2</label>
                                        <input id="address-two" type="text" />
                                    </div>
                                </div>
                                <div class="row two">
                                    <div class="city">
                                        <label for="city">City</label>
                                        <input placeholder="e.g. Cupertino" id="city" type="text" />
                                    </div>
                                    <div class="state">
                                        <label for="state">State / Province / Region</label>
                                        <input placeholder="e.g. California" id="state" type="text" />
                                    </div>
                                </div>
                                <div class="row three">
                                    <div class="zip">
                                        <label for="zip">Zip / Postal Code</label>
                                        <input placeholder="e.g. 95014" id="zip" type="text" />
                                    </div>
                                    <div class="country">
                                        <label for="country">Country</label>
                                        <input placeholder="e.g. U.S.A" id="country" type="text" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section class="form__shipping">
                        <div class="sections">
                            <div class="box">3</div><span>Shipping Address</span>
                        </div>
                        <div class="shipping--form">
                            <form class="form--shipping" action="">
                                <div class="row one">
                                    <div class="address">
                                        <label for="address-one">Address Line 1</label>
                                        <input placeholder="" id="address-one" type="text" />
                                    </div>
                                    <div class="address-two">
                                        <label for="address-two">Address Line 2</label>
                                        <input id="address-two" type="text" />
                                    </div>
                                </div>
                                <div class="row two">
                                    <div class="city">
                                        <label for="city">City</label>
                                        <input placeholder="" id="city" type="text" />
                                    </div>
                                    <div class="state">
                                        <label for="state">State / Province / Region</label>
                                        <input placeholder="" id="state" type="text" />
                                    </div>
                                </div>
                                <div class="row three">
                                    <div class="zip">
                                        <label for="zip">Zip / Postal Code</label>
                                        <input placeholder="" id="zip" type="text" />
                                    </div>
                                    <div class="country">
                                        <label for="country">Country</label>
                                        <input placeholder="" id="country" type="text" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <div class="form__question">
                        <input type="checkbox" />
                        <p>Is your shipping address the same as your billing address ?</p>
                    </div>
                    <div class="form__confirmation">
                        <button>Confirm Information</button>
                    </div>
                </div>
            </div>
        </>
    );
}
