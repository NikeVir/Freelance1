import Image from 'next/image';

export default function TermsAndCondition() {
  return (
    <section className="pb-16 overflow-hidden bg-white">
      <div className="flex flex-col justify-center items-center space-y-12">
        <Image src="/images/illustration/single-cat.svg" alt="" className="mt-16 w-full max-w-xs mx-auto" />
        <div className="flex flex-col justify-center items-center text-center sm:text-left">
          <h1 className="font-bold text-[32px] sm:text-[32px]">Terms and conditions</h1>
          <p className="text-[18px] text-gray-500 px-4">
            Reach out to us anytime, and we&apos;ll get back you as soon as possible!
          </p>
        </div>

        <div className="text-[24px] sm:text-[24px] p-4 sm:p-16 flex flex-col justify-center items-center text-center sm:items-start sm:text-left text-gray-500 font-normal space-y-4">
          <p>Acceptance of terms upon accessing the website.</p>
          <p>Intellectual property rights belong to the company.</p>
          <p>
            Personal use of the website content is allowed with restrictions.
          </p>
          <p>Accurate and current information required for user accounts.</p>
          <p>Prohibited activities include:</p>
          <p>Publishing unauthorized material.</p>
          <p>Selling or sublicensing website content.</p>
          <p>Using the website in a way that causes damage.</p>
          <p>Engaging in data mining or similar activities.</p>
          <p>Disclaimer of warranties and limitation of liability.</p>
          <p>Governing law and jurisdiction.</p>
          <p>Changes to the terms and conditions will be notified.</p>
        </div>
      </div>
    </section>
  );
}
