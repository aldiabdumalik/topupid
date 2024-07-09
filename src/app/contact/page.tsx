import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <div className="flex flex-col prose prose-sm xl:prose-base">
        <h1>Contact Us</h1>
        <p>We are here to help you with all your top-up needs and inquiries. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. You can contact us through the following methods:</p>
        <h2>Email</h2>
        <p>Send us an email at <a href="mailto:ptkadetech@gmail.com">ptkadetech@gmail.com</a>, and we will get back to you as soon as possible.</p>
        <h2>Whatsapp</h2>
        <p>Chat us at <a href="https://wa.me/6289622142528"><i>+(62) 896 2214 2528</i></a> during our business hours: Monday to Friday, 8 AM - 5 PM.</p>
      </div>
    </MainLayout>
  )
}
