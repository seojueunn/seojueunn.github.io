---
emoji: 🧪
title: 객체 지향 프로그램 자동 평가 시스템
date: '2022-08-22 23:00:00'
author: jueunn
tags: programming education Java AST
categories: research project
---

# **Automatic Evaluation System for Object-Oriented Programs**

## Problem Definition

코딩 테스트 및 과제를 자동으로 채점하는 기존의 프로그램들은 대부분 **테스트 케이스만을 기반으로 작동**

**→** ***Repl.it, WebCat*** 등: 특정 Input 값에 대해 Output 값이 정답과 일치하는지 확인하여 평가

**→** **프로그래밍 언어가 가지는 고유의 특성을 반영하지 못한다는 한계**가 있음 (ex. 객체 지향 개념)

## Approach

**객체 지향 개념 검사를 지원하는 자동 채점 엔진 기반의 웹 서비스 *jChecker***

**→** 채점자가 작성한 채점 정책을 바탕으로 프로그램 자동 평가

**→** 채점 정책 중 테스트 케이스를 사용하여 테스트 케이스 기반의 채점 진행

**→** Abstract Syntax Tree (AST) 구문 분석 후 AST node 정보를 통해 객체 지향 개념의 구현 여부 확인

**→** 테스트 케이스 실행 결과, 객체 지향 개념 평가 결과를 자연어 설명으로 제공

### **jChecker 자동 채점 엔진의 동장 및 흐름**

1. **전처리**
    1. 사용자가 채점 대상 프로그램을 압축 파일 (.zip 확장자) 형식으로 제출
    2. Java 라이브러리를 사용하여 정해진 경로에 압축 해제
2. **컴파일 및 실행 (테스트 케이스 기반 채점)**
    1. 채점자가 지정한 컴파일 방법에 따라 컴파일 여부 확인
        - Java 컴파일러를 사용한 컴파일
        - Gradle build tool을 사용한 컴파일
    2. 채점 정책에 작성된 입력값 및 출력값을 사용하여 테스트 케이스 실행
3. **AST 구문 분석 (객체 지향 개념 구현 평가) → jChecker가 새롭게 제안한 Approach**
    1. Eclipse JDT 라이브러리 중 ASTParser를 사용하여 Parsing 진행
    2. 채점 정책에 따라 필요한 AST node 정보 수집 후 구문 분석

    <aside>
    💡 **객체 지향 개념 구현 평가 예시 (Inheritance)**
    TypeDeclaration의 getName()을 통해 구현되어야 하는 하위 class가 존재하는가 확인
    getSuperclassType()을 사용하여 특정 상위 class의 상속 여부 확인
    상위 class와 하위 class가 채점 기준을 만족하면 Inheritance가 적절히 구현되어 있다고 평가

    </aside>

4. **결과 반환**
    1. 채점 결과를 JSON 형태로 반환
    2. 마감 기한을 넘긴 지연 제출 여부를 추가적으로 확인 후 채점 결과에 반영

## Results

### **jChecker 웹 페이지에 접속한 사용자의 흐름 분석**

→ 프론트엔드에 Google Analytics 코드 추가 작성

→ 클래스 페이지 (/classes)가 상호작용에 지속적으로 등장

→ 사용자가 **해당 페이지에서 여러 번의 채점을 시도**하고 있음을 의미

### **사용자 입장**

- jChecker 서비스가 제공하는 피드백을 통해 자신의 코드를 직관적 (직접적, 사실적)으로 확인 가능
- 피드백을 바탕으로 코드를 수정하여 반복적으로 채점 시도 가능
- 객체 지향 개념에 대한 자신의 이해 정도를 확인 가능

### **채점자 입장**

- 많은 수의 제출물을 수동으로 실행하지 않고 jChecker의 결과를 점수에 반영함으로써 채점 시간 단축
- 객관적이고 정확한 평가 결과를 제공 가능