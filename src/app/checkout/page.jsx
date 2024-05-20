"use client"



import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import WhatsAppButton from "../../components/WhatsApp";


const Page = () => {
  // const [selectedOption, setSelectedOption] = useState(7.5);
  const { cart, removeFromCart, updateQuantity, isModalOpen, toggleModal } = useCart();
  const [phone, setPhone] = useState('');


  const [inputs, setInputs] = useState({
    email: "",
    fname: "",
    lname: "",
    phone: "",
    address: '',
    // shipping: selectedOption
  });

  // const handleAddressData = (data) => {
  //   setInputs(prevInputs => ({
  //     ...prevInputs,
  //     ...data
  //   }));
  // }

  // const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Ensure this is set in your .env.local file


  // const handleOptionChange = (option) => {
  //   setSelectedOption(option);
  //   setInputs(prevInputs => ({
  //     ...prevInputs,
  //     shipping: option
  //   }));
  // };

  // const RadioOption = ({ option, label }) => (
  //   <div
  //     onClick={() => handleOptionChange(option)}
  //     style={{
  //       display: 'flex',
  //       alignItems: 'center',
  //       marginBottom: '10px',
  //       cursor: 'pointer',
  //     }}
  //   >
  //     <div
  //       style={{
  //         border: '1px solid #ccc',
  //         borderRadius: '5px',
  //         padding: '10px',
  //         backgroundColor: selectedOption === option ? '#e0e0e0' : 'transparent',
  //       }}
  //     >
  //       {label}
  //     </div>
  //     {selectedOption === option && (
  //       <FontAwesomeIcon
  //         icon={faCheckCircle}
  //         style={{ color: '#ea6a2b', marginLeft: '10px' }}
  //       />
  //     )}
  //   </div>
  // );


  const handleTextboxChange = (textboxName) => (e) => {
    if (textboxName == "phone") {
      // Allow digits and one dot
      const numericValue = e.target.value.replace(/[^0-9.]/g, '');
      setPhone(numericValue);
    }

    setInputs((prevValues) => ({
      ...prevValues,
      [textboxName]: e.target.value,
    }));
  };








  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);







  useEffect(() => {
    console.log("inputs:");
    console.log(inputs);
  }, [inputs]);






  return (
    <>

      <div className="sm:pb-20">
        <Menu />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.input-text{\n\t\tborder-style: solid;\n    border-width: 1px 1px 1px 1px;\n    border-color: #DFDBD4 !important;\n    border-radius: 4px 4px 4px 4px;\n\t}\n\t"
          }}
        />

        <link
          rel="stylesheet"
          id="sublime-theme-style-css"
          href="css/style.css?ver=1.0.0"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="css/frontend-lite.min.css?ver=3.20.3"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="elementor-post-20120-css"
          href="css/post-20120.css?ver=1712762276"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="wfacp-elementor-style-css"
          href="css/wfacp_combined.min.css?ver=3.14.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wfacp-intl-css-css"
          href="css/intlTelInput.css?ver=3.14.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-style-css"
          href="css/wfacp-form.min.css?ver=3.14.0"
          type="text/css"
          media=""
        />

        {cart && cart.length > 0 ? (
          <div className="wfacp-template-container">
            <div
              data-elementor-type="wp-post"
              data-elementor-id={20120}
              className="elementor elementor-20120"
              data-elementor-post-type="wfacp_checkout"
            >

              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-b92d2c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="b92d2c"
                data-element_type="section"
                data-settings='{"background_background":"gradient"}'
                style={{ backgroundImage: " linear-gradient(90deg, #FFFFFF 50%, #e9e9e9 50%)" }}
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f1c046e"
                    data-id="f1c046e"
                    data-element_type="column"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-451a47ba elementor-widget elementor-widget-wfacp_form"
                        data-id="451a47ba"
                        data-element_type="widget"
                        data-widget_type="wfacp_form.default"
                      >
                        <div className="elementor-widget-container">
                          <div id="wfacp-e-form">
                            <div id="wfacp-sec-wrapper">

                              <div className="wfacp-form wfacp-modern-label">
                                {" "}
                                <div className="wfacp_main_form woocommerce wfacp_single_step_form wfacp_three_step wfacp_global_checkout_wrap">
                                  <div className="woocommerce-notices-wrapper" />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "    body.wfacpef_page #wfacp-e-form .wfacp_main_form.woocommerce .wfacp-section.wfacp_order_coupon_box,\n    body.wfacpef_page #wfacp-e-form .wfacp_main_form.woocommerce .wfacp-section.wfacp_order_summary_box {\n    margin-bottom: 0;\n    }\n\thtml {\noverflow: auto !important;\n}\n.wfacp_firefox_android .pac-container .pac-item:first-child {\nmargin-top: 20px;\n}\nspan.wfacp_input_error_msg {\ncolor: red;\nfont-size: 13px;\n}\n\n.wfacp_custom_field_multiselect select {\nvisibility: hidden;}\n\n    .wfacp_page.single_step {\n    display: block;\n    }\n\n\t\n.wfacp_payment {\ndisplay: block;\n}\n\n.wfacp_payment.wfacp_hide_payment_part {\nvisibility: hidden;\nposition: fixed;\nz-index: -600;\nleft: -200%;\n}\n\n.wfacp_payment.wfacp_show_payment_part {\nvisibility: visible;\n}\n\n.wfacp_page.single_step .wfacp_payment {\ndisplay: block;\n}\n\n.wfacp_page.single_step .wfacp_next_page_button {\ndisplay: none;\n}\n\np#shipping_same_as_billing_field .optional {\ndisplay: none;\n}\n\np#billing_same_as_shipping_field .optional {\ndisplay: none;\n}\n\n.wfacp_shipping_fields.wfacp_shipping_field_hide {\ndisplay: none !important;\n}\n\n.wfacp_billing_fields.wfacp_billing_field_hide {\ndisplay: none !important;\n}\n\n\nspan.wfacp_required_field_message {\ndisplay: none;\n}\n\n.woocommerce-invalid-required-field span.wfacp_required_field_message {\ndisplay: inline;\n}\n\n.wfacp_country_field_hide {\ndisplay: none !important;\n}\n\n.wfacp_main_form .wfacp_shipping_table tr.shipping.wfacp_single_methods td.wfacp_shipping_package_name > p {\npadding: 0 0 10px;\n}\n\n.wfacp_main_form .wfacp_shipping_table tr.shipping.wfacp_single_methods td.wfacp_shipping_package_name {\npadding: 0 0 15px;\n}\nbody.wfacp_do_not_show_block .blockUI.blockOverlay{\n    display: none !important;\n}\n#wfacp_checkout_form.checkout.processing .blockUI.blockOverlay{\n    display: block !important;\n}\n#wfacp-e-form .wfacp_mb_mini_cart_sec_accordion_content {\nborder-top: none;\n}\n\n"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-e-form #payment ul.payment_methods li .card-brand-icons img{position: absolute;}.wfacp_smart_button_container #wc-stripe-payment-request-button-separator{display:none !important}.wfacp_smart_button_container #wc-stripe-payment-request-wrapper{margin-top:0 !important}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-e-form #wfacp_checkout_form .ppcp-dcc-order-button{float: none;}.wfacp_main_wrapper.right #ppcp-hosted-fields .button {float: right;}.wfacp_main_wrapper.right #ppcp-hosted-fields:after,.wfacp_main_wrapper.right #ppcp-hosted-fields:before {display: block;content: '';}.wfacp_main_wrapper.right #ppcp-hosted-fields:after {clear: both;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-e-form .wfacp_woo_cart_abandonment_recovery:not(.wfacp-anim-wrap) label{bottom: auto;top: 18px;margin-top:0;}body #wfacp-e-form .wfacp_woo_cart_abandonment_recovery:not(.wfacp-anim-wrap) input.wfacp-form-control{padding-top: 10px;padding-bottom: 10px;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        '@keyframes shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}.wfacp_anim_active .wfacp-qty-ball,.wfacp_anim_active .wfacp_anim tbody tr.cart_item>td .product-image .wfacp-pro-thumb .wfacp-qty-ball{display:none}.wfacp_anim_active .wfacp_anim.wfacp_pro_switch .product-image .wfacp-qty-ball{display:block}.wfacp_mb_mini_cart_sec_accordion_content .wfacp_quantity_selector,.wfacp_mini_cart_start_h .wfacp_quantity_selector{height:25px}.wfacp_anim_active .wfacp_mini_cart_start_h .wfacp_order_sum .product-image{border:none}.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr.cart-discount td span:after{display:none}.wfacp_anim_active #wfacp-e-form .wfacp_main_form .wfacp_shipping_table ul li .wfacp_shipping_price{width:auto!important}.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price{display:inline-block}body.wfacp_anim_active .product-name span,body.wfacp_anim_active .wfacp_shipping_table ul#shipping_method label{display:inline-block!important}.wfacp_anim_active .shipping-method-description{display:inline-block}.wfacp_anim_active #payment .payment_method_stripe label[for=payment_method_stripe]{width:auto!important}.wfacp_anim_active #wfacp_checkout_form:not(.processing) .blockUI,.wfacp_anim_active .cart-discount th span svg,.wfacp_anim_active .wfacp_coupon_field_msg span:after,.wfacp_anim_active .wfacp_mini_cart_start_h .blockUI,.wfacp_anim_active .woocommerce-remove-coupon,.wfacp_collapsible_order_summary_wrap .blockUI,.wfacp_min_cart_widget .blockUI,.wfacp_mini_cart_start_h .blockUI,body #payment .blockUI{display:none!important}.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_switcher_item{display:inline-block!important}.wfacp_anim_active #shipping_method{background-image:none!important}#shipping_method li.wfacp_no_shipping span,.wfacp_anim_active #order_coupon_field .wfacp-coupon-page,.wfacp_anim_active #wfacp-e-form .wfacp_coupon_row,.wfacp_anim_active .amount,.wfacp_anim_active .first-payment-date,.wfacp_anim_active .includes_tax,.wfacp_anim_active .product-name strong.product-quantity,.wfacp_anim_active .shipping th:first-child span+small,.wfacp_anim_active .shipping-method-description,.wfacp_anim_active .shipping_total_fee span,.wfacp_anim_active .shipping_total_fee td:first-child span,.wfacp_anim_active .shipping_total_fee td:first-child span+small,.wfacp_anim_active .subscription-price span,.wfacp_anim_active .tax-total span,.wfacp_anim_active .tax_label,.wfacp_anim_active .wfacp-coupon-page .wfacp_coupon_field_box,.wfacp_anim_active .wfacp_best_value,.wfacp_anim_active .wfacp_coupon_msg .woocommerce-error,.wfacp_anim_active .wfacp_main_showcoupon,.wfacp_anim_active .wfacp_mb_mini_cart_sec_accordion_content .cart_item .wfacp_order_summary_item_name .wfacp_cart_title_sec,.wfacp_anim_active .wfacp_mini_cart_item_title,.wfacp_anim_active .wfacp_mini_cart_reviews tr td:first-child span,.wfacp_anim_active .wfacp_mini_cart_reviews tr th span,.wfacp_anim_active .wfacp_mini_cart_start_h .wfacp_coupon_row,.wfacp_anim_active .wfacp_no_add_here li label,.wfacp_anim_active .wfacp_no_add_here li span,.wfacp_anim_active .wfacp_order_subtotal td:first-child span,.wfacp_anim_active .wfacp_order_subtotal td>span,.wfacp_anim_active .wfacp_order_summary_container .shop_table tr th span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:first-child span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:last-child span.woocommerce-Price-amount.amount,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) th:first-child span,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).cart-discount td:last-child,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).shipping_total_fee td:last-child span,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio,.wfacp_anim_active .wfacp_order_total_wrap tr td span,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_name_inner>span,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_select_options a,.wfacp_anim_active .wfacp_pro_switch .product-name .wfacp_product_switcher_item,.wfacp_anim_active .wfacp_pro_switch .wfacp-pro-thumb,.wfacp_anim_active .wfacp_pro_switch .wfacp_pro_attr_single,.wfacp_anim_active .wfacp_pro_switch .wfacp_pro_attr_single span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_choosen,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container .wfacp_product_price_sec span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container del span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_price_container ins span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_row_quantity,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_subs_details span,.wfacp_anim_active .wfacp_pro_switch .wfacp_product_switch,.wfacp_anim_active .wfacp_pro_switch .wfacp_quantity .wfacp_qty_wrap,.wfacp_anim_active .wfacp_pro_switch .wfacp_qv-button,.wfacp_anim_active .wfacp_pro_switch .wfacp_selected_attributes,.wfacp_anim_active .wfacp_pro_switch .wfacp_you_save_text,.wfacp_anim_active .wfacp_product_row .wfacp_delete_item,.wfacp_anim_active .wfacp_qv-button,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price span,.wfacp_anim_active .wfacp_shipping_table li label,.wfacp_anim_active .wfacp_showcoupon,.wfacp_anim_active .wfacp_single_coupon_msg,.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price,.wfacp_anim_active .wfacp_step_preview .single_preview_change a,.wfacp_anim_active .wfacp_step_preview .single_preview_inner span,.wfacp_anim_active .wfacp_whats_included .wfacp_product_switcher_description,.wfacp_anim_active .wfacp_whats_included>h3,.wfacp_anim_active .wfacp_you_save_text,.wfacp_anim_active table tr td:first-child span,.wfacp_anim_active tbody tr.cart_item .wfacp_delete_item_wrap a,.wfacp_anim_active tbody tr.cart_item td.product-total .woocommerce-Price-amount.amount,.wfacp_anim_active tbody tr.cart_item>td .product-image,.wfacp_anim_active tbody tr.cart_item>td .product-name span,.wfacp_anim_active tbody tr.cart_item>td .wfacp_product_subs_details span,.wfacp_anim_active tbody tr.cart_item>td .wfacp_quantity_selector{position:relative}#shipping_method li.wfacp_no_shipping label,#wfacp-e-form .wfacp_main_form .wfacp_shipping_options li.wfacp_no_shipping label{margin:0!important;display:inline-block!important}.wfacp_anim_active .amount:after,.wfacp_anim_active .first-payment-date:after,.wfacp_anim_active .includes_tax:after,.wfacp_anim_active .product-name strong.product-quantity:after,.wfacp_anim_active .shipping th:first-child span+small:after,.wfacp_anim_active .shipping-method-description:after,.wfacp_anim_active .shipping_total_fee span:after,.wfacp_anim_active .shipping_total_fee td:first-child span:after,.wfacp_anim_active .shipping_total_fee th:first-child span+small:after,.wfacp_anim_active .subscription-price span:after,.wfacp_anim_active .tax-total span:after,.wfacp_anim_active .tax_label:after,.wfacp_anim_active .wfacp_coupon_msg .woocommerce-error:after,.wfacp_anim_active .wfacp_mb_mini_cart_sec_accordion_content .cart_item .wfacp_order_summary_item_name .wfacp_cart_title_sec:after,.wfacp_anim_active .wfacp_mini_cart_item_title:after,.wfacp_anim_active .wfacp_mini_cart_reviews tr td:first-child span:after,.wfacp_anim_active .wfacp_mini_cart_reviews tr th span:after,.wfacp_anim_active .wfacp_no_add_here li label:after,.wfacp_anim_active .wfacp_no_add_here li span:after,.wfacp_anim_active .wfacp_order_subtotal td:first-child span:after,.wfacp_anim_active .wfacp_order_subtotal td>span:after,.wfacp_anim_active .wfacp_order_summary_container .shop_table tr th span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:first-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) td:last-child span.woocommerce-Price-amount.amount:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item) th:first-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).cart-discount td:last-child span:after,.wfacp_anim_active .wfacp_order_summary_container table:not(.wfacp_mini_cart_items) tr:not(.cart_item).shipping_total_fee td:last-child span:after,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio:after,.wfacp_anim_active .wfacp_order_total_wrap tr td span:after,.wfacp_anim_active .wfacp_shipping_table .wfacp_shipping_price span:after,.wfacp_anim_active .wfacp_shipping_table li label:after,.wfacp_anim_active .wfacp_single_coupon_msg:after,.wfacp_anim_active .wfacp_single_shipping .wfacp_shipping_price:after,.wfacp_anim_active table tr td:first-child span:after,.wfacp_anim_active tbody tr.cart_item .wfacp_delete_item_wrap a:after,.wfacp_anim_active tbody tr.cart_item td.product-total .woocommerce-Price-amount.amount:after,.wfacp_anim_active tbody tr.cart_item>td .product-image:after,.wfacp_anim_active tbody tr.cart_item>td .product-name span:after,.wfacp_anim_active tbody tr.cart_item>td .wfacp_product_subs_details span:after,.wfacp_anim_active tbody tr.cart_item>td .wfacp_quantity_selector:after{animation:shimmer 2s linear infinite;background:linear-gradient(to right,#eff1f3 4%,#e2e2e2 25%,#eff1f3 36%);background-size:1000px 100%;content:" ";display:block;margin:0;position:absolute;right:0;top:0;bottom:0;left:0;z-index:10000}.wfacp_anim_active .wfacp_error:after,.wfacp_anim_active .wfacp_single_coupon_msg:after{left:-2px!important}.wfacp-row.wfacp_coupon_row{position:relative}.wfacp-row.wfacp_coupon_row .clear{clear:both}.wfacp_anim_active .wfacp_error,.wfacp_anim_active .wfacp_order_summary_container ul li .wfacp_shipping_radio,.wfacp_anim_active .wfacp_single_coupon_msg,.wfacp_anim_active span.subscription-details{display:inline-block}body #wfacp-e-form .wfacp-coupon-page .wfacp_coupon_remove_msg,body #wfacp-e-form .wfacp_coupon_field_msg{border-color:transparent!important;background:0 0}.wfacp_anim_active span.subscription-details{display:inline-block}.wfacp_anim_active tr.order-total strong+div{display:none}.wfacp_anim_active .wfacp_main_showcoupon,.wfacp_anim_active a.wfacp_showcoupon{display:inline-block}.wfacp_anim_active .wfacp_delete_item_wrap a,.wfacp_anim_active a.wfacp_remove_item_from_order_summary{border-color:transparent!important}.wfacp_anim_active tr.cart-discount td{font-size:0!important}.wfacp_anim_active #wfacp_checkout_form table.wfacp_shipping_table ul li .wfacp_shipping_radio{width:auto!important}.wfacp_anim_active #wfob_wrap .wfob_bump span:after{display:none}'
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body{overflow-x: visible;}section {margin-bottom: 0;}.woocommerce-checkout h3 {border: none;line-height: 1.5;padding: 0;margin: 0 0 10px;}#customer_login h2::after, #payment .place-order button[type=submit], #reviews #comments>h2::after, #reviews:not(.electro-advanced-reviews) #comments>h2::after, .address header.title h3::after, .addresses header.title h3::after, .cart-collaterals h2:not(.woocommerce-loop-product__title)::after, .comment-reply-title::after, .comments-title::after, .contact-page-title::after, .cpf-type-range .tm-range-picker .noUi-origin .noUi-handle, .customer-login-form h2::after, .departments-menu .departments-menu-dropdown, .departments-menu .menu-item-has-children>.dropdown-menu, .ec-tabs>li.active a::after, .edit-account legend::after, .footer-widgets .widget-title:after, .header-v1 .navbar-search .input-group .btn, .header-v1 .navbar-search .input-group .form-control, .header-v1 .navbar-search .input-group .input-group-addon, .header-v3 .navbar-search .input-group .btn, .header-v3 .navbar-search .input-group .form-control, .header-v3 .navbar-search .input-group .input-group-addon, .navbar-primary .navbar-mini-cart .dropdown-menu-mini-cart, .pings-title::after, .products-2-1-2 .nav-link.active::after, .products-6-1 header ul.nav .active .nav-link, .products-carousel-tabs .nav-link.active::after, .sidebar .widget-title::after, .sidebar-blog .widget-title::after, .single-product .electro-tabs+section.products>h2::after, .single-product .electro-tabs~div.products>h2::after, .single-product .woocommerce-tabs+section.products>h2::after, .single-product .woocommerce-tabs~div.products>h2::after, .track-order h2::after, .wc-tabs>li.active a::after, .widget.widget_tag_cloud .tagcloud a:focus, .widget.widget_tag_cloud .tagcloud a:hover, .widget_electro_products_carousel_widget .section-products-carousel .owl-nav .owl-next:hover, .widget_electro_products_carousel_widget .section-products-carousel .owl-nav .owl-prev:hover, .widget_price_filter .ui-slider .ui-slider-handle:last-child, .woocommerce-account h2::after, .woocommerce-checkout h3::after, .woocommerce-edit-address form h3::after, .woocommerce-order-received h2::after, .wpb-accordion .vc_tta.vc_general .vc_tta-panel.vc_active .vc_tta-panel-heading .vc_tta-panel-title>a i, section header .h1::after, section header h1::after, section.section-onsale-product, section.section-onsale-product-carousel .onsale-product-carousel, section.section-product-cards-carousel header ul.nav .active .nav-link{\n\tdisplay:none;\n}body #wfacp-e-form .woocommerce-checkout #payment ul.payment_methods li {padding: 11px !important;}body #wfacp-e-form #shipping_method li label > span {position: relative;right: auto;left: auto;top: auto;}body #wfacp-e-form .wfacp_order_summary tr.shipping > td{display: table-cell;flex: auto;}body #wfacp-e-form .wfacp_order_summary tr.shipping > th {display: table-cell;flex: auto;}body #wfacp-e-form .woocommerce-checkout-review-order-table tbody > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .woocommerce-checkout-review-order-table tfoot > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .woocommerce-checkout-review-order-table thead > tr{display: table-row;width: 100%;justify-content: initial;}body #wfacp-e-form .wfacp_shipping_options .border:last-child table {margin-bottom: 0;}body #wfacp-e-form .wfacp_main_form .wfacp_shipping_table.wfacp_shipping_recurring tr.shipping:last-child td {padding-bottom: 0;margin-bottom: 0;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body .wfacp-section.wfacp_payment.wfacp_hide_payment_part {visibility: visible;position: relative;z-index: 0;left: 0}\nbody span#ppcp-credit-card-gateway-card-number {height: 40px !important;}\nbody span#ppcp-credit-card-gateway-card-expiry {height: 40px !important;}\nbody span#ppcp-credit-card-gateway-card-cvc {height: 40px !important;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-e-form  #payment li.wc_payment_method input.input-radio:checked::before{background-color:#fff;}body #wfacp-e-form  #payment.wc_payment_method input[type=radio]:checked:before{background-color:#fff;}body #wfacp-e-form  button[type=submit]:not(.white):not(.black){background-color:#fff;}body #wfacp-e-form  button[type=button]:not(.white):not(.black){background-color:#fff;}body #wfacp-e-form .wfacp-coupon-section .wfacp-coupon-page .wfacp-coupon-field-btn{background-color:#fff;}body #wfacp-e-form input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form #payment input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-input-wrapper .wfacp-form-control:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=checkbox]:checked{background-color:#fff;}body #wfacp-e-form .wfacp_main_form .button.button#place_order{background-color:#fff;}body #wfacp-e-form .wfacp_main_form .button.wfacp_next_page_button{background-color:#fff;}body #wfacp-e-form .wfacp_main_form  .wfacp_payment #ppcp-hosted-fields .button{background-color:#fff;}body #wfacp-e-form .form-row:not(.woocommerce-invalid-required-field) .wfacp-form-control:not(.input-checkbox):focus{border-color:#fff ;}body #wfacp-e-form  p.form-row:not(.woocommerce-invalid-required-field) .wfacp-form-control:not(.input-checkbox):focus{box-shadow:0 0 0 1px #fff ;}body #wfacp-e-form .wfacp_main_form .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single .select2-selection__rendered:focus{border-color:#fff ;}body #wfacp-e-form .wfacp_main_form.woocommerce .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single .select2-selection__rendered:focus{box-shadow:0 0 0 1px #fff;}body #wfacp-e-form .wfacp_main_form .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single:focus>span.select2-selection__rendered{box-shadow:0 0 0 1px #fff ;}body #wfacp-e-form .wfacp_main_form.woocommerce #payment li.wc_payment_method input.input-radio:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #payment.wc_payment_method input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #add_payment_method #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-cart #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce .woocommerce-checkout #payment ul.payment_methods li input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form.woocommerce #wfacp_checkout_form input[type=radio]:checked{border-color:#fff;}body #wfacp-e-form .wfacp-form input[type=checkbox]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form #payment input[type=checkbox]:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form .woocommerce-input-wrapper .wfacp-form-control:checked{border-color:#fff;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:checked{border-width: 8px;}body #wfacp-e-form .wfacp_main_form.woocommerce .form-row:not(.woocommerce-invalid-required-field) .woocommerce-input-wrapper .select2-container .select2-selection--single:focus>span.select2-selection__rendered{border-color:#fff;}body #wfacp-e-form .wfacp_main_form #payment li.wc_payment_method input.input-radio:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form #payment.wc_payment_method input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form #add_payment_method #payment ul.payment_methods li input[type=radio]:checked{border-width:5px;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:after{display: block;}body #wfacp-e-form .wfacp_main_form input[type=checkbox]:before{display: none;}body #wfacp-e-form #payment li.wc_payment_method input.input-radio:checked::before{display:none;}body #wfacp-e-form #payment.wc_payment_method input[type=radio]:checked:before{display:none;}body #wfacp-e-form input[type=radio]:checked:before{display:none;}body #wfacp-e-form .wfacp_main_form.woocommerce input[type=radio]:checked:before{display:none;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-sec-wrapper  p.form-row.wfacp_collapsible_enable.wfacp_hidden_class {display: none;}body #wfacp-sec-wrapper  p.form-row.wfacp_collapsible_field_wrap.wfacp_hidden_class {display: none;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "body #wfacp-e-form #wfacp-sec-wrapper .wfacp-top label.wfacp-form-control-label {position: relative;left: 0;right: 0;bottom: 0;top: 0;margin-top: 0;line-height:1.5;background: transparent;display: block;margin-bottom: 4px;opacity:1;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce #wfacp_checkout_form p.wfacp-form-control-wrapper:not(.wfacp_checkbox_field):not(.checkbox):not(.wfacp_textarea_fields):not(.wfacp_collapsible_field_wrap) {min-height:78px;}body #wfacp-e-form .none{display: block ; }body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=email]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=number]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=password]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=tel]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=text]{padding: 12px 12px ;}body #wfacp-e-form .wfacp_collapsible_order_summary_wrap.wfacp-top input[type=text]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce input[type=date]{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce .wfacp_allowed_countries strong{padding: 12px 12px ;}body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce select,.wfacp-form.wfacp-top .wfacp_main_form.woocommerce textarea{padding: 12px 12px ; }body #wfacp-e-form .wfacp-top .wfacp_main_form.woocommerce .select2-container .select2-selection--single .select2-selection__rendered{padding: 12px 12px ;}"
                                    }}
                                  />
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        '\n    .loader {\n        color: #fff;\n        position: fixed;\n        box-sizing: border-box;\n        left: -9999px;\n        top: -9999px;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n        z-index: 999999;\n\n    }\n\n    .loader:after,\n    .loader:before {\n        box-sizing: border-box;\n\n    }\n\n    .loader.is-active {\n        background-color: rgba(0, 0, 0, 0.85);\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n    }\n\n    .loader.is-active:after,\n    .loader.is-active:before {\n        display: block;\n    }\n\n    .blockUI:before {\n\n        display: none;\n    }\n\n\n    @keyframes rotation {\n        0% {\n            transform: rotate(0);\n        }\n        to {\n            transform: rotate(359deg);\n        }\n    }\n\n\n    .loader[data-text]:before {\n        position: fixed;\n        left: 0;\n        top: 50%;\n        color: currentColor;\n\n        text-align: center;\n        width: 100%;\n        font-size: 14px;\n    }\n\n    .loader[data-text=""]:before {\n        content: "Loading";\n    }\n\n    .loader[data-text]:not([data-text=""]):before {\n        content: attr(data-text);\n    }\n\n\n    .loader-default[data-text]:before {\n        top: calc(50% - 63px);\n    }\n\n    .loader-default:after {\n        content: "";\n        position: fixed;\n        width: 48px;\n        height: 48px;\n        border: 8px solid #fff;\n        border-left-color: transparent;\n        border-radius: 50%;\n        top: calc(50% - 24px);\n        left: calc(50% - 24px);\n        animation: rotation 1s linear infinite;\n\n    }\n\n\n    .wfacp_firefox_android .pac-container .pac-item:first-child {\n        margin-top: 20px;\n    }\n\n    span.wfacp_input_error_msg {\n        color: red;\n        font-size: 13px;\n    }\n\n'
                                    }}
                                  />
                                  <div className="woocommerce-notices-wrapper" />
                                  <div className="wt_coupon_wrapper">
                                    <style
                                      type="text/css"
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          ".wt_sc_single_coupon{ display:inline-block; width:300px; max-width:100%; height:auto; padding:5px; text-align:center; background:#2890a8; color:#ffffff; position:relative; }\n        .wt_sc_single_coupon .wt_sc_hidden{ display:none; }\n        .wt_sc_single_coupon.active-coupon{ cursor:pointer; }\n        .wt_sc_coupon_amount{ font-size:30px; margin-right:5px; line-height:22px; font-weight:500; }\n        .wt_sc_coupon_type{ font-size:20px;  font-weight:500; line-height:22px; }\n        .wt_sc_coupon_code{ float:left; width:100%; font-size:19px; line-height:22px; }\n        .wt_sc_coupon_code code{ background:none; font-size:15px; opacity:0.7; display:inline-block; line-height:22px; max-width:100%; word-wrap:break-word; }\n        .wt_sc_coupon_content{ padding:10px 0px; float:left; width:100%; }   \n        .wt_sc_coupon_desc_wrapper:hover .wt_sc_coupon_desc{ display:block}\n        .wt_sc_coupon_desc{position:absolute; top:-18px; background:#333; color:#fff; text-shadow:none; text-align:left; font-size:12px; width:200px; right:-220px; padding:10px 20px; z-index:100; border-radius:8px; display:none; }\n        .wt_sc_coupon_desc ul{margin:0!important;text-align:left;list-style-type:disc}\n        .wt_sc_coupon_desc ul li{padding:0;margin:0;width:100%;height:auto;min-height:auto;list-style-type:disc!important}\n        .wt_sc_coupon_desc_wrapper i.info{position:absolute; top:6px; right:10px; font-size:13px; font-weight:700; border-radius:100%; width:20px; height:20px; background:#fff; text-shadow:none; color:#2890a8; font-style:normal; cursor:pointer; line-height:20px; box-shadow:1px 1px 4px #333; }\n\n        .wt_sc_credit_history_url{font-size:13px;font-weight:700;border-radius:100%;width:20px;height:20px;text-shadow:none;font-style:normal;cursor:pointer;position:absolute;right:12px;bottom:10px;text-align:center;line-height:20px;text-decoration:none!important;background:#fff}\n        .wt_sc_credit_history_url span{font:bold 14px/1 dashicons}\n        a.wt_sc_credit_history_url span:before{ line-height:20px; color:#2890a8; }\n\n        @media only screen and (max-width: 700px)  {\n          .wt_sc_coupon_content{z-index: 5; }\n          .wt_sc_single_coupon .wt_sc_coupon_desc{ z-index: 100; right:auto; top:30px; left:0px; }\n        }"
                                      }}
                                    />
                                  </div>{" "}
                                  <form
                                    name="checkout"
                                    // method="post"
                                    className="checkout woocommerce-checkout"
                                    encType="multipart/form-data"
                                    id="wfacp_checkout_form"
                                  >

                                    <div
                                      className="wfacp-left-panel wfacp_page elementor single_step wfacp_last_page"
                                      data-step="single_step"
                                    >
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            '\n\n    @media (min-width: 768px) {\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="1"] .wfacp_smart_button_container {\n            width: 100%;\n            float: none;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="2"] .wfacp_smart_button_container {\n            width: 50%;\n        }\n\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="3"] .wfacp_smart_button_container {\n            width: 33.33%;\n\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="4"] .wfacp_smart_button_container {\n            width: 25%;\n\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="1"] #pay_with_amazon {\n            background-size: 20%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="2"] #pay_with_amazon {\n            background-size: 30%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="3"] #pay_with_amazon {\n            background-size: 45%;\n        }\n        #wfacp_smart_buttons .wfacp_smart_button_outer_buttons[count="4"] #pay_with_amazon {\n            background-size: 50%;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st {\n            margin: 0 -10px !important;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wc-amazon-checkout-message.wc-amazon-payments-advanced-populated {\n            display: block;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons div#pay_with_amazon,\n        #wfacp_smart_buttons #wfacp_smart_button_stripe_gpay_apay div#wc-stripe-payment-request-wrapper,\n        #wfacp_smart_buttons #wfacp_smart_button_stripe_gpay_apay div#wc-stripe-payment-request-wrapper,\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st div#paypal_box_button > div {\n            width: 100%;\n        }\n\n        .wfacp_smart_button_wrap_st div#paypal_box_button > div {\n            max-width: 100%;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container {\n            display: block;\n            margin: 0 !important;\n            padding: 0 10px;\n            float: left;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container iframe {\n            max-height: 42px !important;\n            height: 100% !important;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:after,\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:before {\n            content: \'\';\n            display: block;\n        }\n\n        #wfacp_smart_buttons.wfacp_smart_buttons .wfacp_smart_button_container:after {\n            clear: both;\n        }\n\n        #wfacp_smart_buttons .wfacp_smart_button_wrap_st div#paypal_box_button .paypal-buttons {\n            min-width: 1px;\n            height: 42px !important;\n            display: block !important;\n        }\n    }\n\n'
                                        }}
                                      />

                                      <div
                                        className="wfacp-section wfacp-hg-by-box step_0 form_section_single_step_0_elementor-hific "
                                        data-field-count={19}
                                      >
                                        <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                          <h2 className="wfacp_section_heading wfacp_section_title ">
                                            Shipping Information
                                          </h2>
                                        </div>
                                        <div className="wfacp-comm-form-detail clearfix">
                                          <div className="wfacp-row">
                                            <p
                                              className="form-row form-row-wide wfacp-form-control-wrapper wfacp-col-full  wfacp_field_required validate-required validate-email validate-email"
                                              id="billing_email_field"
                                              data-priority={110}
                                            >
                                              <label
                                                htmlFor="billing_email"
                                                className="wfacp-form-control-label"
                                              >
                                                Email&nbsp;
                                                <abbr
                                                  className="required"
                                                  title="required"
                                                >
                                                  *
                                                </abbr>
                                              </label>
                                              <span className="woocommerce-input-wrapper">
                                                <input
                                                  type="email"
                                                  className="input-text wfacp-form-control"
                                                  name="billing_email"
                                                  id="billing_email"
                                                  placeholder="Email *"
                                                  defaultValue=""
                                                  autoComplete="email username"
                                                  value={inputs.email}
                                                  onChange={handleTextboxChange('email')}
                                                />
                                              </span>{" "}
                                              <span
                                                className="wfacp_inline_error"
                                                data-key="billing_email_field"
                                              />
                                            </p>
                                            <p
                                              className="form-row form-row-first wfacp-form-control-wrapper wfacp-col-left-half  wfacp_field_required validate-required"
                                              id="billing_first_name_field"
                                              data-priority={10}
                                            >
                                              <label
                                                htmlFor="billing_first_name"
                                                className="wfacp-form-control-label"
                                              >
                                                First name&nbsp;
                                                <abbr
                                                  className="required"
                                                  title="required"
                                                >
                                                  *
                                                </abbr>
                                              </label>
                                              <span className="woocommerce-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text wfacp-form-control"
                                                  name="billing_first_name"
                                                  id="billing_first_name"
                                                  placeholder="First name *"
                                                  defaultValue=""
                                                  autoComplete="given-name"
                                                  value={inputs.fname}
                                                  onChange={handleTextboxChange('fname')}
                                                />
                                              </span>{" "}
                                              <span
                                                className="wfacp_inline_error"
                                                data-key="billing_first_name_field"
                                              />
                                            </p>
                                            <p
                                              className="form-row form-row-last wfacp-form-control-wrapper wfacp-col-left-half  wfacp_field_required validate-required"
                                              id="billing_last_name_field"
                                              data-priority={20}
                                            >
                                              <label
                                                htmlFor="billing_last_name"
                                                className="wfacp-form-control-label"
                                              >
                                                Last name&nbsp;
                                                <abbr
                                                  className="required"
                                                  title="required"
                                                >
                                                  *
                                                </abbr>
                                              </label>
                                              <span className="woocommerce-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text wfacp-form-control"
                                                  name="billing_last_name"
                                                  id="billing_last_name"
                                                  placeholder="Last name *"
                                                  defaultValue=""
                                                  autoComplete="family-name"
                                                  value={inputs.lname}
                                                  onChange={handleTextboxChange('lname')}
                                                />
                                              </span>{" "}
                                              <span
                                                className="wfacp_inline_error"
                                                data-key="billing_last_name_field"
                                              />
                                            </p>
                                            <p
                                              className="form-row form-row-wide wfacp-form-control-wrapper wfacp-col-full  wfacp_field_required validate-required validate-email validate-email"
                                              id="billing_address_field"
                                              data-priority={110}
                                            >
                                              <label
                                                htmlFor="billing_address"
                                                className="wfacp-form-control-label"
                                              >
                                                Address&nbsp;
                                                <abbr
                                                  className="required"
                                                  title="required"
                                                >
                                                  *
                                                </abbr>
                                              </label>
                                              <span className="woocommerce-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text wfacp-form-control"
                                                  name="billing_address"
                                                  id="billing_address"
                                                  placeholder="Address *"
                                                  defaultValue=""
                                                  autoComplete="address"
                                                  value={inputs.address}
                                                  onChange={handleTextboxChange('address')}
                                                />
                                              </span>{" "}
                                              <span
                                                className="wfacp_inline_error"
                                                data-key="billing_email_field"
                                              />
                                            </p>
                                            <p
                                              className="form-row form-row-wide wfacp-form-control-wrapper wfacp-col-full  wfacp_field_required validate-required validate-email validate-email"
                                              id="billing_phone_field"
                                              data-priority={110}
                                            >
                                              <label
                                                htmlFor="billing_phone"
                                                className="wfacp-form-control-label"
                                              >
                                                Phone&nbsp;
                                                <abbr
                                                  className="required"
                                                  title="required"
                                                >
                                                  *
                                                </abbr>
                                              </label>
                                              <span className="woocommerce-input-wrapper">
                                                <input
                                                  type="text"
                                                  className="input-text wfacp-form-control"
                                                  name="billing_phone"
                                                  id="billing_phone"
                                                  placeholder="Phone *"
                                                  defaultValue=""
                                                  autoComplete="phone"
                                                  value={phone}
                                                  onChange={handleTextboxChange('phone')}
                                                />
                                              </span>{" "}
                                              <span
                                                className="wfacp_inline_error"
                                                data-key="billing_email_field"
                                              />
                                            </p>


                                            {" "}
                                            <span
                                              className="wfacp_inline_error"
                                              data-key="billing_phone_field"
                                            />
                                            <p />{" "}
                                          </div>
                                        </div>
                                      </div>



                                      {/* <div
                                      className="wfacp-section wfacp-hg-by-box step_1 form_section_single_step_1_elementor-hific  wfacp_shipping_method wfacp_shipping_method"
                                      data-field-count={1}
                                    >
                                      <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                        <h2 className="wfacp_section_heading wfacp_section_title ">
                                          Shipping Method
                                        </h2>
                                      </div>
                                    </div>


                                    <div>
                                      <RadioOption option={0} label="Free shipping (3-6 days)" />
                                      <RadioOption option={7.5} label="Express Post (1-2 days)" />


                                    </div> */}


                                      <div
                                        className="wfacp-section wfacp-hg-by-box step_2 form_section_single_step_2_elementor-hific "
                                        data-field-count={2}
                                      >
                                        <div className="wfacp_internal_form_wrap wfacp-comm-title ">
                                          <h2 className="wfacp_section_heading wfacp_section_title ">
                                            Order Summary
                                          </h2>
                                        </div>
                                        <div className="wfacp-comm-form-detail clearfix">
                                          <div className="wfacp-row">
                                            <div
                                              className="wfacp_woocommerce_form_coupon wfacp-form-control-wrapper "
                                              id="order_coupon_field"
                                            >

                                            </div>
                                            <div
                                              className="wfacp_order_summary wfacp_wrapper_start wfacp_order_sec  "
                                              id="order_summary_field"
                                              data-time={1712942806}
                                            >
                                              <label className="wfacp-order-summary-label">Order Summary</label>
                                              <div className="wfacp_anim wfacp_order_summary_container">
                                                <table className="shop_table woocommerce-checkout-review-order-table elementor-hific">
                                                  <thead>
                                                    <tr>
                                                      <th className="product-name-area">
                                                        <div className="product-img"> </div>{" "}
                                                        <div className="product-name wfacp_summary_img_true">
                                                          Product{" "}
                                                        </div>
                                                      </th>
                                                      <th className="product-total">Total</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>

                                                    {cart?.map((obj, index) => (
                                                      <>
                                                        <tr
                                                          className="cart_item"
                                                          cart_key="aa4f9d456a8504a879ce2fe54e9a68bd"
                                                        >
                                                          <td className="product-name-area">
                                                            <div className="product-image">
                                                              <div className="wfacp-pro-thumb">
                                                                <div className="wfacp-qty-ball" style={{ top: "-5px" }}>
                                                                  <div className="wfacp-qty-count">
                                                                    <span className="wfacp-pro-count">{obj.quantity}</span>
                                                                  </div>
                                                                </div>
                                                                <img src={obj.img[0]}
                                                                  width={100}
                                                                  height={100}
                                                                />{" "}
                                                              </div>
                                                            </div>
                                                            <div className="product-name  wfacp_summary_img_true ">
                                                              <span className="wfacp_order_summary_item_name">
                                                                {obj.title}
                                                              </span>
                                                            </div>
                                                          </td>














                                                          <td className="product-total">
                                                            <div className="wfacp_order_summary_item_total">
                                                              <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                  <span className="woocommerce-Price-currencySymbol">
                                                                    QTY:
                                                                  </span>
                                                                  <input
                                                                    type="number"
                                                                    value={obj.quantity}
                                                                    min="1"
                                                                    style={{
                                                                      width: "35px",
                                                                      display: "inline",
                                                                      minHeight: "25px",
                                                                      lineHeight: "3px",
                                                                      paddingLeft: "5px",
                                                                      paddingBottom: "0px",
                                                                      paddingRight: "0px",
                                                                      paddingTop: "0px"
                                                                    }}
                                                                    onChange={(e) => handleQuantityChange(obj.id, e.target.value)}
                                                                  />
                                                                </bdi>
                                                              </span>{" "}
                                                            </div>
                                                            <div style={{ marginLeft: "3em" }}>
                                                            </div>
                                                          </td>







                                                          <td className="product-total">
                                                            <div className="wfacp_order_summary_item_total">
                                                              <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                  <span className="woocommerce-Price-currencySymbol">
                                                                    $
                                                                  </span>
                                                                  {(obj.price * obj.quantity || obj.price)}
                                                                </bdi>
                                                              </span>{" "}
                                                            </div>
                                                          </td>










                                                          <td className="product-total">
                                                            <div className="wfacp_order_summary_item_total">
                                                              <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                  <span className="woocommerce-Price-currencySymbol">
                                                                    <button onClick={() => removeFromCart(obj.id)}><svg style={{ width: "18px" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>

                                                                  </span>

                                                                </bdi>
                                                              </span>{" "}
                                                            </div>
                                                          </td>










                                                        </tr>
                                                        <tr style={{ height: '1px', backgroundColor: '#DFDEE5', position: "absolute" }}>




                                                        </tr>
                                                      </>
                                                    ))
                                                    }
                                                  </tbody>


                                                  <tfoot>

                                                    <style
                                                      dangerouslySetInnerHTML={{
                                                        __html:
                                                          "\n    .pwgc-checkout-subtitle {\n        line-height: 1.4;\n        font-size: 80%;\n        font-weight: 300;\n    }\n"
                                                      }}
                                                    />
                                                    <tr className="order-total">
                                                      <th>
                                                        <span>Total</span>
                                                      </th>
                                                      <td>
                                                        <strong>
                                                          <span className="woocommerce-Price-amount amount">
                                                            <bdi>
                                                              <span className="woocommerce-Price-currencySymbol">
                                                                $
                                                              </span>
                                                              {/* {selectedOption !== 0 ? (subtotal + 7.50).toFixed(2) : subtotal.toFixed(2)} */}
                                                              {total}
                                                            </bdi>
                                                          </span>
                                                        </strong>{" "}
                                                      </td>
                                                    </tr>
                                                  </tfoot>
                                                </table>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>



                                    </div>
                                  </form>

                                  {/* <Checkout personal={inputs} /> */}


                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                      </div>





                      <WhatsAppButton inputs={inputs} items={cart} />
                      {/* <span className="ProvidersSingleProduct--selected">
                        <button type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
                          <span>Done</span>
                        </button>
                      </span> */}









                      <div
                        className="elementor-element elementor-element-5ffcd68 elementor-widget elementor-widget-spacer"
                        data-id="5ffcd68"
                        data-element_type="widget"
                        data-widget_type="spacer.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container{height:100%;width:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty,.e-con>.elementor-widget-spacer.elementor-widget-empty{position:relative;min-height:22px;min-width:22px}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon,.e-con>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;padding:0;width:22px;height:22px}"
                            }}
                          />{" "}
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>

                      <div
                        className="elementor-element elementor-element-8ca5397 elementor-widget elementor-widget-spacer"
                        data-id="8ca5397"
                        data-element_type="widget"
                        data-widget_type="spacer.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-462e12f4"
                    data-id="462e12f4"
                    data-element_type="column"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-widget-wrap elementor-element-populated" style={{ backgroundColor: "#e9e9e9" }}>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-5abb9fe elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="5abb9fe"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fd1abaa"
                            data-id="fd1abaa"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-0e1fd4d elementor-widget elementor-widget-spacer"
                                data-id="0e1fd4d"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div
                        className="elementor-element elementor-element-46b87940 elementor-widget elementor-widget-text-editor"
                        data-id="46b87940"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}"
                            }}
                          />{" "}
                          Shop With Confidence{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-6671b079 elementor-widget elementor-widget-text-editor"
                        data-id="6671b079"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>Trusted by more than 5000+ users</p>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-2d85f393 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="2d85f393"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                Fully Customisable Profile
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                Contact Card, Website, Social Media and More
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                Secure Encrypted Data
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  style={{ color: '#ea6a2b', marginLeft: '10px' }}
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                24/7 Customer Service
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-c0e01b3 elementor-widget elementor-widget-spacer"
                        data-id="c0e01b3"
                        data-element_type="widget"
                        data-widget_type="spacer.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-412bf62f elementor-widget elementor-widget-text-editor"
                        data-id="412bf62f"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >

                      </div>







                      <div
                        className="elementor-element elementor-element-26beaee9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                        data-id="26beaee9"
                        data-element_type="widget"
                        data-widget_type="divider.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '/*! elementor - v3.20.0 - 26-03-2024 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-block-end:0;flex-grow:1;border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider--element-align-start .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-start .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-start .elementor-divider__element{margin-inline-start:0}.elementor-widget-divider--element-align-end .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-end .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-end .elementor-divider__element{margin-inline-end:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-block-start:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}'
                            }}
                          />{" "}
                          <div className="elementor-divider">
                            <span className="elementor-divider-separator"></span>
                          </div>
                        </div>
                      </div>

                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-d69b4d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="d69b4d5"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ac02d3e"
                            data-id="ac02d3e"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-70e47e6 elementor-widget elementor-widget-spacer"
                                data-id="70e47e6"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-69635c4 elementor-align-center elementor-widget elementor-widget-button"
                                data-id="69635c4"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a
                                      className="elementor-button elementor-button-link elementor-size-sm"
                                      href="/products"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          Continue Shopping
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-aa53a25 elementor-widget elementor-widget-spacer"
                                data-id="aa53a25"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>


        ) : (
          <center>
            <div
              data-render-if="cart-is-initialised,cart-is-empty"
              className="Checkout_Empty"
              style={{ marginTop: '15em', marginBottom: '15em' }}
            >

              <div className="Checkout_Empty_IconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27" style={{ width: '40px' }}>
                  <circle cx={13} cy={24} r={2} />
                  <circle cx={24} cy={24} r={2} />
                  <path d="M1.5 2h3s1.5 0 2 2l4 13s.4 1 1 1h13s3.6-.3 4-4l1-5s0-1-2-1h-19" />
                </svg>
              </div>
              <p className="EmptyCartBlurb">You have no items in your shopping cart.</p>
              <a
                href="/products"
              >
                <span className="ProvidersSingleProduct--selected1" >
                  <button type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
                    <span>Continue shopping</span>
                  </button>
                </span>

              </a>
            </div>
          </center>
        )}

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n          .ProvidersSingleProduct--selected1{\n            display:block ;\n       width:500px  ;\n     }\n   @media (max-width: 600px) {\n     .ProvidersSingleProduct--selected1{\n       width:100%;\n     }\n   }\n\n\n"
          }}
        />




        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\n  select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] {\n    font-family: initial;\n    font-size: initial;\n    line-height: initial;\n    font-weight: initial;\n    padding: initial;\n    border-radius: initial;\n    border-style: initial;\n    border-width: initial;\n    border-color: initial;\n    background-color: initial;\n    margin-bottom: initial;\n    text-shadow: initial;\n    box-shadow: initial;\n    box-sizing: initial;\n    transition: initial;\n    color: initial;\n}\n'
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n.NewsletterSignupFooter_Component .klaviyo_submit_button {\n  line-height: inherit;\n}\n"
          }}
        />
        <style
          dangerouslySetInnerHTML={{ __html: "\n\nbody {\n      color: initial;\n}\n" }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.flex {\n    display: flex !important;\n}\n.w-full {\n    width: 100%!important;\n}\n.text-xl {\n    --tw-text-opacity: 1;!important\n    color: rgb(116 100 90 / var(--tw-text-opacity))!important;\n}\n.gap-32 {\n    gap: 12rem!important;\n}\n.justify-center {\n    justify-content: center!important; \n}\n.items-center {\n    align-items: center!important;\n}\n.w-full {\n    width: 100%!important;\n    padding: 1em!important;\n}\n.flex {\n    display: flex!important;\n}\n* {\n    box-sizing: border-box!important;\n}\n.uppercase {\n    text-transform: uppercase!important;\n}\n.text-xl {\n    font-size: 1.9rem;!important;\n    line-height: 1.75rem!important;\n}\na {\n    color: inherit!important;\n    text-decoration: inherit!important;\n} \n\n.kTmGOZ {\n  color: #222222 !important;\n}\n\n.ProvidersSingleProduct--selected{\n  width:100%;\n}\n\n.HtmlProductAddToCart{\n  line-height:0px;\n}\n\n.HtmlProductAddToCart:hover:not(.HtmlProductAddToCart--disabled) {\n    background-color: #070c03;\n    box-shadow: 0 20px 15px -17px rgba(0, 0, 0, .3), 0 1px 2px rgba(0, 0, 0, .3);\n}\n\n.w-20 {\n    width: 7rem;\n}\n\n.h-20 {\n    height: 7rem;\n}\n \n"
          }}
        />


        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  @media (max-width: 600px) {\n    .mobNav {\n            display: flex !important;\n    }\n    .text-xl {\n    font-size: 1.5rem;\n    line-height: 1.75rem !important;\n}\n}\n"
          }}
        />


        <style
          dangerouslySetInnerHTML={{
            __html:
              "\nh1 {\n    font-size: 1.375em; \n}\nh2 {\n    font-size: 1.125em; \n}\n"
          }}
        />




        <Footer />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n  width:15em !important;\n}\n}\n"
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  @media only screen and (max-width: 600px) {\n.button, button, input[type="button"], input[type="reset"], input[type="submit"] {\n \n    color: rgb(67 20 7 / 0.6); \n    padding:0;\n}\n}\n'
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  \n.button, button, input[type="button"], input[type="reset"], input[type="submit"] {\n \n    color: rgb(67 20 7 / 0.6);  \n}\n \n'
          }}
        />


      </div>

    </>

  )

}
export default Page