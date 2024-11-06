import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Federer R project</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/bigData.jpg" // Replace with your actual image path
            alt="Project One"
            width={600}
            height={400}
            className="object-cover rounded-md"
          />
          <CardDescription className="mt-4">
            Developed predictive models using R on a comprehensive dataset of tennis matches (2000-2010)
            to analyze and forecast match outcomes for Roger Federer. Leveraged data engineering techniques
            and implemented supervised learning models, including K-Nearest Neighbors (KNN) and
            Support Vector Machines (SVM), to predict Federer&apos;s winning probability based on
            factors such as match location, tournament type, court surface, and additional variables. Data engineering done using Python.
          </CardDescription>
          <div className="mt-4">
            <p className="font-bold">Technologies Used:</p>
            <ul className="list-disc ml-5">
              <li>R</li>
              <li>Numpy</li>
              <li>Pandas</li>
            </ul>
          </div>
          <div className="mt-4">
            <a href="https://github.com/Murtazah1/FedererProjectR" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
            <br />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>3380 Database Project</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/amusement.jpg" // Replace with your actual image path
            alt="Project One"
            width={600}
            height={400}
            className="object-cover rounded-md"
          />
          <CardDescription className="mt-4">
            Led a team of four in creating a full-stack mock website for an amusement park as part of a database course project.
            Developed core features such as ticket reservation and visitor information management systems, simulating real-world amusement park operations.
            Implemented multi-user management to enhance security and control access, ensuring a robust user experience.
          </CardDescription>
          <div className="mt-4">
            <p className="font-bold">Technologies Used:</p>
            <ul className="list-disc ml-5">
              <li>PHP</li>
              <li>JS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="mt-4">
            <a href="https://github.com/Murtazah1/3380DataBaseProject" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
            <br />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
