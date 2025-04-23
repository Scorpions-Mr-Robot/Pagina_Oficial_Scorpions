
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function BlogPostDialog({ post, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </DialogHeader>
        <div className="mt-4">
          <div className="aspect-video mb-6">
            <img 
              className="w-full h-full object-cover rounded-lg"
              alt={post.title}
             src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
          </div>
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="mt-6 flex gap-2 flex-wrap">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
