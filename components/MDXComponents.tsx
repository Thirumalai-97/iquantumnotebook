export default {
  h1: (props: any) => <h1 className="text-4xl font-bold text-cyan-400 mt-10" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold text-violet-400 mt-8" {...props} />,
  p: (props: any) => <p className="my-5 text-gray-300 leading-relaxed" {...props} />,
  code: (props: any) => <code className="bg-gray-800 px-1 rounded text-cyan-300" {...props} />
};
