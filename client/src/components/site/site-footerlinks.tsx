export default function SiteFooterLinks() {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <h3 className="font-bold mb-2">ONLINE SHOPPING</h3>
        <ul className="space-y-1 cursor-pointer text-gray-400 font-bold">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Customer Policies</h3>
        <ul className="space-y-1 cursor-pointer text-gray-400 font-bold">
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Cancellation</li>
          <li>Returns</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Useful links</h3>
        <ul className="space-y-1 cursor-pointer text-gray-400 font-bold">
          <li>Blog</li>
          <li>Careers</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Services</h3>
        <ul className="space-y-1 cursor-pointer text-gray-400 font-bold">
          <li>Free Delivery</li>
          <li>Secure Payment</li>
          <li>24/7 Support</li>
        </ul>
      </div>
    </div>
  );
}
