import events from "../events";

export async function generateStaticParams() {
  const eventList = Object.entries(events);

  const paths = [];
  for (let [department, events] of eventList) {
    for (let event of events) {
      paths.push({
        params: {
          id: event.id,
          name: event.name,
          description: event.description,
          url: event.url,
        },
      });
    }
  }
  return paths;
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const eventList = Object.entries(events);

  const paths: any = [];

  // Get the paths we want to pre-render based on posts
  eventList.map(([department, events]) => {
    //console.log(department);
    events.map((event) => {
      paths.push({
        params: {
          url: event.url,
        },
      });
    });
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  //console.log(paths[paths.length - 1]);
  //console.log(paths);
  return { paths, fallback: false };
}

const getData = (name: string) => {
  name = name.replace("%20", " ");
  console.log(name);

  const eventList = Object.entries(events);
  for (let [department, events] of eventList) {
    for (let event of events) {
      if (event.url === name) {
        return event;
      }
    }
  }
};

export default function Event({ params }: { params: { url: string } }) {
  console.log(params);
  const event = getData(params.url);
  console.log(event);

  if (event)
    return (
      <div className="bg-[#131313] text-primary-foreground font-sans">
        <div className="p-8">
          <p className="text-4xl mb-8">{event.name}</p>
          <p className="text-[1.15rem] mb-2">{event.description}</p>
        </div>
      </div>
    );
}
