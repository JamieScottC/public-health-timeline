import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaVirus,
  FaViruses,
  FaArrowUp,
  FaHourglassStart,
  FaThinkPeaks,
  FaCalendar,
  FaDiceThree,
  FaHourglassEnd,
  FaHourglassHalf,
  FaFlagCheckered,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="timeline-header">
        <h1>The 1918 Flu Pandemic</h1>
        <h3 style={{ fontWeight: "normal" }}>
          A timeline of the events during the pandemic
        </h3>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="January 1918"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaVirus />}
        >
          <h3 className="vertical-timeline-element-title">
            First Cases Emerge
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Haskell County, KS
          </h4>
          <p>
            The first cases of the Spanish Flu are believed to have emerged in
            Haskell County, Kansas, United States, although some sources suggest
            it may have originated elsewhere.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 1918"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaViruses />}
        >
          <h3 className="vertical-timeline-element-title">
            Virus Begins to Spread
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Camp Funston, KS
          </h4>
          <p>
            The virus starts to spread among U.S. military personnel stationed
            at Camp Funston in Fort Riley, Kansas, and then to other military
            camps and Europe as American troops deploy for World War I.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Spring 1918"
          contentStyle={{ background: "rgb(8,49,69)", color: "#fff" }}
          iconStyle={{ background: "rgb(8,49,69)", color: "#fff" }}
          icon={<FaArrowUp />}
        >
          <h3 className="vertical-timeline-element-title">First Wave Starts</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Europe, Asia, North America
          </h4>
          <p>
            {" "}
            The first wave of the pandemic begins, with outbreaks in Europe,
            Asia, and North America. This wave is relatively mild, with lower
            mortality rates than later waves.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August-September 1918"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHourglassStart />}
        >
          <h3 className="vertical-timeline-element-title">
            Second Wave Starts
          </h3>
          <p>
            The second wave of the pandemic starts, with a more virulent strain
            of the virus. The disease spreads rapidly among both military
            personnel and civilians. Mortality rates are significantly higher
            during this wave.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October-November 1918"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaThinkPeaks />}
        >
          <h3 className="vertical-timeline-element-title">Second Wave Peaks</h3>
          <p>
            The second wave peaks, leading to the highest number of deaths
            during the pandemic. The name "Spanish Flu" becomes widespread due
            to extensive reporting on the disease in Spain, which had remained
            neutral during the war and had less strict wartime censorship.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 1918"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCalendar />}
        >
          <h3 className="vertical-timeline-element-title">World War I Ends</h3>
          <p>
            World War I ends, which contributes to the rapid global spread of
            the virus as soldiers return to their home countries.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Winter 1918-1919"
          contentStyle={{ background: "rgb(82,101,116)", color: "#fff" }}
          iconStyle={{ background: "rgb(82,101,116)", color: "#fff" }}
          icon={<FaDiceThree />}
        >
          <h3 className="vertical-timeline-element-title">Third Wave Occurs</h3>

          <p>
            The third wave of the pandemic occurs, with high mortality rates,
            but not as severe as the second wave.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Late 1919"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHourglassHalf />}
        >
          <h3 className="vertical-timeline-element-title">Near the End</h3>
          <p>
            The pandemic begins to subside, although localized outbreaks
            continue to occur in various parts of the world.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1920"
          contentStyle={{ background: "rgb(82,116,104)", color: "#fff" }}
          iconStyle={{ background: "rgb(82,116,104)", color: "#fff" }}
          icon={<FaHourglassEnd />}
        >
          <h3 className="vertical-timeline-element-title">The End</h3>
          <p>
            The 1918 flu pandemic comes to an end, but the H1N1 virus continues
            to circulate in the human population for decades.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaFlagCheckered />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default App;
