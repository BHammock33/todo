package com.coderscampus.reactbackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coderscampus.reactbackend.domain.TodoItem;
import com.coderscampus.reactbackend.repository.TodoRepository;

@RestController
@RequestMapping("/api/todoItems")
public class TodoController {

	@Autowired
	private TodoRepository todoRepo;

	@GetMapping
	public ResponseEntity<List<TodoItem>> getAllTodoItems() {
		List<TodoItem> allTodoItems = null;
		
		try {
			allTodoItems = todoRepo.findAll();
		}catch (Exception e) {
			return ResponseEntity.status(500).build();
		}

		return ResponseEntity.ok(allTodoItems);
	}
	@PostMapping
	public ResponseEntity<List<TodoItem>> addNewTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.save(todoItem);
		
		return getAllTodoItems();
	}
}
