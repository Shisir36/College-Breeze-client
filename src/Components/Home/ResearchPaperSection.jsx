import { useEffect, useState } from 'react';

const ResearchPaperSection = () => {
    const [researchPapers, setResearchPapers] = useState([]);

    useEffect(() => {
        // Simulated API call to fetch research papers from the backend
        // Replace this with your actual API call to fetch real data
        const fetchResearchPapers = async () => {
            try {
                // Sample research papers data (replace this with real data)
                const sampleData = [
                    {
                        _id: '1',
                        title: 'Advances in Artificial Intelligence',
                        authors: ['John Doe', 'Jane Smith'],
                        publicationDate: '2023-07-01',
                        researchField: 'Machine Learning',
                        description: 'This paper discusses the latest advancements in AI.',
                        link: 'https://example.com/paper1',
                    },
                    {
                        _id: '2',
                        title: 'Blockchain Technology and Decentralization',
                        authors: ['Michael Johnson', 'Emily Williams'],
                        publicationDate: '2023-07-05',
                        researchField: 'Blockchain',
                        description: 'An exploration of blockchain technology and its impact on decentralization.',
                        link: 'https://example.com/paper2',
                    },
                    {
                        _id: '3',
                        title: 'The Future of Quantum Computing',
                        authors: ['Robert Anderson', 'Sophia Lee'],
                        publicationDate: '2023-07-10',
                        researchField: 'Quantum Computing',
                        description: 'An overview of the potential applications of quantum computing.',
                        link: 'https://example.com/paper3',
                    },
                    
                    // Add more research papers as needed
                ];

                setResearchPapers(sampleData);
            } catch (error) {
                console.error('Error fetching research papers:', error);
            }
        };

        fetchResearchPapers();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="text-4xl font-semibold mb-6 mt-10 text-center col-span-full text-orange-400 underline ">Research Papers</h2>
            {researchPapers.length === 0 ? (
                <p className="col-span-full text-center text-gray-500">No research papers available</p>
            ) : (
                <>
                    {researchPapers.map((paper) => (
                        <div key={paper._id} className="bg-white   p-10  border">
                            <h3 className="text-3xl font-semibold mb-4 text-teal-600">{paper.title}</h3>
                            <p className="text-xl text-gray-600 mb-2"><span className='font-bold'>Authors:</span> {paper.authors.join(', ')}</p>
                            <p className="text-xl text-gray-600 mb-2"><span className='font-bold'>Publication Date:</span>  {paper.publicationDate}</p>
                            <p className="text-xl text-gray-600 mb-4"><span className='font-bold'>Research Field:</span>  {paper.researchField}</p>
                            <p className="text-xl mb-4">{paper.description}</p>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                Read Paper
                            </a>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ResearchPaperSection;
