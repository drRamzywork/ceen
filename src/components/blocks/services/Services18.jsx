import useProgressbar from 'hooks/useProgressbar'; // -------- data -------- //

import { skill1 } from 'data/skill';
import { serviceList8 } from 'data/service';

const Services18 = () => {
  // used for the animated line
  useProgressbar();
  return <section id='hero' className="wrapper bg-light wrapper-border">
    <div className="container py-14 py-md-18">
      <div className="col">


        <div className="col">
          <h2 className="display-4 mb-3">Label</h2>
          <p className="lead fs-20 mb-5">
            Do you struggle with inaccurate data entry or face challenges in scaling your data collection due to extensive workforce requirements? Our advanced labeling technology leverages computer vision and large language models (LLMs) to boost accuracy and efficiency. Designed to support user feedback, our tools enable seamless integration of human expertise whenever necessary, optimizing both performance and reliability
          </p>
        </div>


        <div className="col">
          <h2 className="display-4 mb-3">Reason</h2>
          <p className="lead fs-20 mb-5">
            Impressed by advancements in large language models, but frustrated by their reasoning  limitations such as producing irrelevant content or 'hallucinations'?
            Our solution integrates Retrieval-Augmented Generation (RAG) augmented with reasoning capabilities to enhance output relevancy and accuracy. By fine-tuning the interaction between user inputs and our system, we ensure that the generated content is not only precise but also perfectly aligned with your specific needs.
          </p>
        </div>
        <div className="col">
          <h2 className="display-4 mb-3">Decide</h2>
          <p className="lead fs-20 mb-5">
            Ever felt overwhelmed by the volume of data at your disposal, struggling to extract actionable insights?
            Our graph analytics and causal modeling tools transform complex data into clear, actionable information. By visualizing relationships and dependencies, we help you identify critical insights and make informed decisions quickly. This approach significantly reduces the noise, focusing on the data that truly matters for your strategy and objectives.          </p>
        </div>
      </div>


    </div>
  </section>;
};

export default Services18;