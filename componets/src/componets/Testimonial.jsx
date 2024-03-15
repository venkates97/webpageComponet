export function Testimonial() {

  const testimonialData = [
    {
      imgurl: "assets/img/testimonials-1.jpg",
      name: "Margaret E.",
      para: "This is fantastic! Thanks so much guys!",
    },
    {
      imgurl: "assets/img/testimonials-2.jpg",
      name: "Fred S.",
      para: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      imgurl: "assets/img/testimonials-3.jpg",
      name: "Sarah W.",
      para: "Thanks so much for making these free resources available to us!",
    },
  ];

  return (
    <>
      <section class="testimonials text-center bg-light">
        <div class="container">
          <h2 class="mb-5">What people are saying...</h2>
          <div class="row">
            {testimonialData.map((e) => {
              return (<>
                <div class="col-lg-4">
                  <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src={e.imgurl} alt="..." />
                    <h5>{e.name}</h5>
                    <p class="font-weight-light mb-0">{e.para}</p>
                  </div>
                </div>
              </>);
            })}
          </div>
        </div>
      </section>
    </>
  );
}
