# Ebanux Payment Links

Payment links allow customers to click a link or scan a QR code to access a fast checkout.

To create a payment link you need to create a product first or you just can create the product directly from the payment links view.

### Create a new payment link

You can create a payment link from the Products view by selecting the option Add payment link in the sidebar menu

![image](https://user-images.githubusercontent.com/54523080/186739281-70524447-49f5-43e4-b206-47028092138d.png)

Another way of creating a payment link is by pressing the button Create Payment Link in the Payment Links view.

![](C:\Users\joe\AppData\Roaming\marktext\images\2022-08-25-14-19-35-image.png)

A payment link is closely related to one or more products, so when creating a payment link you need to enter the product information together with some information related to the payment link as explained below.

 ![image](https://user-images.githubusercontent.com/54523080/186802721-947e7c14-374c-4e99-afd6-bfbf587d8ac4.png)

- Product
  
  - Choose Recurring or One Time to filter the products with the selected payment frequency.
  
  - Select an existing product or create a new one.

- Confirmation page
  
  - Choose between show or don't show the confirmation page.

- Options
  
  - Collect tax automatically
  
  - Collect customers' addresses
  
  - Require customers to provide a phone number

- Advanced options
  
  - Call to Action

**Product**

When you choose between Recurring or One Time the pull down menu is populated with the products which had been defined with the selected payment frequency. 

One Time products:

![image](https://user-images.githubusercontent.com/54523080/186811008-2db3cf3d-8c21-46a4-955c-ad1c07b80b0f.png)

Recurring products:

![image](https://user-images.githubusercontent.com/54523080/186811273-d62c7ab5-8e68-4b7d-9f67-92eb2d3f7d88.png)

You can select an existing product and continue to enter the remaining fields or you can create a new product on the fly

![image](https://user-images.githubusercontent.com/54523080/186811689-039076f8-aef8-4b0d-a11f-3b68d132fef6.png)

When you create the product in advance the pull down menu shows only those products with the selected payment frequency. Nevertheless, when you create a new product directly on the New Payment Link view, you need to take care of creating a product with the selected payment frequencly (Recurring in the case of the example where we are creating a Stripe Subscription)

![image](https://user-images.githubusercontent.com/54523080/186813195-9ddce495-c630-4156-a418-6e50fd8f3097.png)

If you create a product with a different payment frequency, an error occurs. If the product is created successfully it's shown in the New Payment Link view and you can add a new product to the payment link if you want to add more than one product to the payment link.

![image](https://user-images.githubusercontent.com/54523080/186813785-1a0f16be-d10a-42cc-a9f3-872c20b706ba.png)

You can also remove a product from the payment link. In fact, if you want to change the payment frequency you will be forced to remove the product from the payment link in order to add a product with the new payment frequency.

![image](https://user-images.githubusercontent.com/54523080/186815106-5c38ef67-2717-4682-a19d-9cf058c92c48.png)

**Confirmation page**

You can choose between show or don't show the confirmation page. If you choose to show the confirmation page, you are able to customize the message

![image](https://user-images.githubusercontent.com/54523080/186820814-5845e85c-1bca-45c9-aecc-2dc46e8d73c5.png)

**Options**

- Collect tax automatically: Set true if you want Stripe to calculate taxes as defined on every product. You should notice Stripe adds 0.5% to the transaction fee when calculate taxes.

- Collect customers' addresses: Set true if you want Stripe to requires the customer's billing address to calculate the relevant tax rate

- Require customers to provide a phone number: Set true only if you need the phone number to complete the transaction.

**Advanced Options**

- Call to Action: You can choose a Call to Action word between: Pay, Book or Donate. The pull down menu to select the Call to Action word is only available for One Time payment links.

After completing to enter the payment link information you must press the button Create. You should notice the Call to Action pull down menu is not available because in the case of the eample we're creating a Recurring payment link, also known as  a Subscription.

![image](https://user-images.githubusercontent.com/54523080/186822481-b04c50f1-a845-4257-94c9-6dd0bc6350cf.png)

And you can see the payment link in the list.

![image](https://user-images.githubusercontent.com/54523080/186822684-21239891-49f4-4d03-b628-f6ab3f14cdc3.png)

### Manage an existing payment link

You can manage an existing payment by accessing the context menu button at the end of the line for an especific payment link. Besides, there are two more actions available for every payment link: Copy the link and Customize a QR Code for the link.

![image](https://user-images.githubusercontent.com/54523080/187281072-5ff6db1a-9f47-4ad2-9a5c-eb8609036c7d.png)

The context menu allows to see the payment link details  or deactivate it.

![image](https://user-images.githubusercontent.com/54523080/187281921-067c1a16-cb3a-414a-8745-77e3e7cc143c.png)

To see the payment link's detail press the option Details.

![image](https://user-images.githubusercontent.com/54523080/187282200-0771ad51-0b3a-4ad8-8fb2-1fc4440adee7.png)

After selecting Details, the details view is shown. You can go back to the list of payment links by using the Back button in the top bar.

![image](https://user-images.githubusercontent.com/54523080/187285474-6717bd86-7cab-4ace-9b51-8a915e4cb0d0.png)

The option Deactivate allows you to deactivate a payment link

![image](https://user-images.githubusercontent.com/54523080/187287439-6dd12c05-476b-4cb5-8959-40f8a334a3bb.png)

After deactivating the payment link it appear as Deactivated in the list. So the actions to copy the link and customize the QR code are disabled for the link which is deactivated.

![image](https://user-images.githubusercontent.com/54523080/187289868-d703cb4b-3006-4c0a-b994-cfa86757c330.png)

### Share a payment link

For sharing the payment link as a URL, you can copy the link by using any of the two buttons shown in the picture below.

![image](https://user-images.githubusercontent.com/54523080/187293083-26905f78-7b6c-46dc-84ab-8e36879ecf55.png)

You can also share the payment link as a QR code by pressing the button Custom QR.

![image](https://user-images.githubusercontent.com/54523080/187293455-6c8606ba-1c08-4b19-883b-b3a3768bbc8c.png)

By pressing the button Custom QR you will be able to customize a QR code for your payment link in The QR Link app.

![image](https://user-images.githubusercontent.com/54523080/187293696-1f66f7bc-3118-4654-aba7-069e25167504.png)

To learn how to customize a QR code by using The QR Link app you should read: https://docs.theqr.link/
