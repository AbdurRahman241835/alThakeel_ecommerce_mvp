import Products from "./component/Products";

export default function Home() {

  // This is the main page of the application, actually in this page ("/") we render the landing page of the application
  // but as of now we render the Products component which is responsible for displaying the products list
  return (
    <div>
      <Products/>
    </div>
  );
}
