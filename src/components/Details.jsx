import React from "react";

const Details = () => {
  return (
    <div className="flex flex-wrap w-full h-full p-5 mx-auto max-[560px]:flex-col max-[560px]:w-[100%] mt-2 dark:text-white dark:bg-gray-900 ">
      <div className="mb-2">
        <h1 className="mb-2 text-xl font-semibold">Details</h1>
        <p>
          Bring the fun to any run with the Tree Flyer 2. The seriously springy
          (and seriously sustainable) running shoe you love is back with
          increased stability, support, and grip to keep those smiles coming
          mile after mile.
        </p>
      </div>
      <div className="mb-2">
        <h1 className="mb-2 text-xl font-semibold">Specs</h1>
        <p>Heel Drop: 8.5 mm (Forefoot: 22.0 mm, Heel: 30.5 mm)</p>
        <p>Weight: 8.37oz/ 237.3g (W7) | 10.63oz / 301.5g (M9)</p>
      </div>
      <div className="mb-2">
        <h1 className="mb-2 text-xl font-semibold">Sustainability</h1>
        <p>
          Our Tree Flyer 2 has a carbon footprint of 7.21 kg CO2e. Learn more
          about carbon footprint labeling and our commitments to reduce our
          impact. As a carbon neutral business certified by Climate Neutral, we
          balance our emissions by funding high impact carbon projects.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-2 text-xl font-semibold">Shipping and returns</h1>
        <p>
          Free shipping on orders over $75, and our 30 days, no questions asked
          return policy. Lightly worn shoes get donated to Soles4Souls.
        </p>
        <p>
          Visit our Returns Portal. Final Sale items cannot be returned or
          exchanged. Final Sale items include: gift cards, insoles, sock undles,
          TrinoXO Face Masks, and items tagged final sale on our website and in
          Allbirds retail stores.
        </p>
        <p>
          Need it sooner? See if the style you want is available at a store near
          you.
        </p>
      </div>
    </div>
  );
};

export default Details;
