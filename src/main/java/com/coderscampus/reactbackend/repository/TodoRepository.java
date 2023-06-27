package com.coderscampus.reactbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coderscampus.reactbackend.domain.TodoItem;

public interface TodoRepository extends JpaRepository<TodoItem, Long>{

	List<TodoItem> findByIsDone(Boolean isDone);
}
