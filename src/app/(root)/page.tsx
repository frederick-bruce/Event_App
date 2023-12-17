import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Share, Connect, Save: Your Recipes, Our Platform
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Create and share tips from 6,321+ members with our global
              community.
            </p>
            <Button size="lg" asChild className="w-full sm:w-fit">
              <Link href="#recipes">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="recipes" className="wrapper my-8 flex flex-col md:gap-12">
        <h2 className="h2-bold">Trusted by <br/> Thousands of Chefs</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
