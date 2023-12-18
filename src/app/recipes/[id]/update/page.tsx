import RecipeForm from "@/components/shared/RecipeForm";
import { auth } from "@clerk/nextjs";



export default function UpdateRecipe() {


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Recipe{" "}
        </h3>
      </section>
      <div className="wrapper my-8">
        <RecipeForm userId={userId} type="Update" />
      </div>
    </>
  );
}
