package com.coderscampus.reactbackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@GetMapping("/active")
	public ResponseEntity<List<TodoItem>> getActiveTodoItems(){
		List<TodoItem> allActiveTodoItems = null;
		
		try {
			allActiveTodoItems = todoRepo.findByIsDone(false);
		}catch (Exception e) {
			return ResponseEntity.status(500).build();
		}

		return ResponseEntity.ok(allActiveTodoItems);
	}
	
	
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public ResponseEntity<List<TodoItem>> addNewTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.save(todoItem);
		
		return getAllTodoItems();
	}
//	@PutMapping
//	public ResponseEntity<?> updateTodoItem(@RequestBody TodoItem todoItem){
//		todoRepo.save(todoItem);
//		
//		return getAllTodoItems();
//	}
	@DeleteMapping
	public ResponseEntity<List<TodoItem>> deleteTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.deleteById(todoItem.getId());
		return getAllTodoItems();
	}
}
