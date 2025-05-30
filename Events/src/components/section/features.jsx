export const Features = ({ title, features }) => {

    return (
        <section className="wrapper">
            <h2 className="text-4xl font-bold mb-5">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                  features && features.map((feature, index) => (
                      <div key={index} className="bg-slate-600 p-4 ">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-sky-900">{feature.description}</p>
                      </div>

                     ) )
                }
            </div>
        </section>
    )
}