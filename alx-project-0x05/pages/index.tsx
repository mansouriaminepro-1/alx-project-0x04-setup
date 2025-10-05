import Layout from '../components/layouts/Layout';
import Button from '../components/common/Button';
import { useRouter } from 'next/router';

interface PageRouteProps {
  pageRoute: string;
}

export default function Home() {
  const router = useRouter();

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center pt-24 pb-16">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App!
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl px-4">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-wrap justify-center gap-6 px-4">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/contact-us" })}
            buttonLabel="Contact Us"
            buttonBackgroundColor="orange"
          />
        </div>
      </div>
    </Layout>
  );
}