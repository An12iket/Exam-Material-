// src/SubjectPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './SubjectPage.css';

const materials = {
  'ai-ml': {
    Learning: [
      { name: 'Introduction to AI.pdf', file: '/materials/AI & ML/AI-ML.Matarial.pdf' },
    ],
  },
  'is': {
    Learning: [
      { name: 'Introduction to Information Security', file: '/materials/IS/Unit 1 Introduction to Information Security.pdf' },
      { name: 'Unit - 2', file: '/materials/IS/Unit 2.pdf' },
      { name: 'Unit 2 TransPosition', file: '/materials/IS/Unit 2 (2.0).pdf' },
    ],
    QuestionBank: [
      { name: 'Chapter 2', file: '/materials/IS/Chapter 2 question.docx'},
      { name: 'Chapter 2(1.0)', file: '/materials/IS/Question Unit 2.jpg'},
    ],
    PaperFormat: [
      { name: 'IS Paper Format.pdf', file: '/materials/IS/IS Mid-1 Syllabus and paper format.pdf' },
    ],
  },
  'cns': {
    Learning: [
      { name: 'Unit 1', file: '/materials/CNS/UNIT1.pdf' },
      { name: 'Unit 2', file: '/materials/CNS/UNIT 3.pdf' },
      { name: 'Unit 3', file: '/materials/CNS/UNIT2.pdf' },
    ],
    QuestionBank: [],
    PaperFormat: [
      { name: 'CNS Paper Format.pdf', file: '/materials/CNS/CNS Mid-1 Syllabus and paper format.pdf' },
    ],
  },
};

function SubjectPage() {
  const { subjectName } = useParams();
  const subjectMaterials = materials[subjectName];

  if (!subjectMaterials) {
    return (
      <div className="subject-page">
        <h2>Subject Not Found</h2>
        <p>The subject you are looking for does not exist. Please select a valid subject.</p>
      </div>
    );
  }

  return (
    <div className="subject-page">
      <h2>{subjectName.toUpperCase()} Materials</h2>
      
      <div className="material-section">
        <h3>Learning Material:</h3>
        <ul>
          {subjectMaterials.Learning && subjectMaterials.Learning.length > 0 ? (
            subjectMaterials.Learning.map((material, index) => (
              <li key={index}>
                <a href={material.file} target="_blank" rel="noopener noreferrer">
                  {material.name}
                </a>
              </li>
            ))
          ) : (
            <li>No learning materials available.</li>
          )}
        </ul>
      </div>

      <div className="material-section">
        <h3>Question Bank</h3>
        <ul>
          {subjectMaterials.QuestionBank && subjectMaterials.QuestionBank.length > 0 ? (
            subjectMaterials.QuestionBank.map((material, index) => (
              <li key={index}>
                <a href={material.file} target="_blank" rel="noopener noreferrer">
                  {material.name}
                </a>
              </li>
            ))
          ) : (
            <li>No question bank available.</li>
          )}
        </ul>
      </div>

      <div className="material-section">
        <h3>Paper Format</h3>
        <ul>
          {subjectMaterials.PaperFormat && subjectMaterials.PaperFormat.length > 0 ? (
            subjectMaterials.PaperFormat.map((material, index) => (
              <li key={index}>
                <a href={material.file} target="_blank" rel="noopener noreferrer">
                  {material.name}
                </a>
              </li>
            ))
          ) : (
            <li>No paper format available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SubjectPage;
